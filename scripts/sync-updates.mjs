import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')
const targetFile = path.join(rootDir, 'docs', 'actualizaciones', 'index.md')

// Ensure target directory exists
const targetDir = path.dirname(targetFile)
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true })
}

async function fetchModrinthVersions() {
  try {
    const res = await fetch('https://api.modrinth.com/v2/project/staff-plus/version', {
      headers: {
        'User-Agent': 'StaffPlus-Wiki/1.0.0 (admin@staffplus.io)'
      }
    })
    if (!res.ok) {
      console.warn(`[Sync-Updates] Modrinth responded with status ${res.status}`)
      return []
    }
    const data = await res.json()
    return Array.isArray(data) ? data : []
  } catch (err) {
    console.warn('[Sync-Updates] Error fetching Modrinth versions:', err.message)
    return []
  }
}

function formatDate(isoString) {
  if (!isoString) return 'Fecha no especificada'
  try {
    const d = new Date(isoString)
    return d.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  } catch {
    return isoString
  }
}

async function generateChangelog() {
  console.log('[Sync-Updates] Consultando versiones en Modrinth API...')
  const versions = await fetchModrinthVersions()

  let md = `---
title: Registro de Actualizaciones
description: Historial de versiones y changelog automático de StaffPlus
---

# 🚀 Registro de Actualizaciones (Changelog)

> 🔄 **Página Automatizada:** Esta sección se sincroniza y compila automáticamente cada vez que se publica una nueva actualización en [Modrinth](https://modrinth.com/plugin/staff-plus) o en GitHub.

---
`

  if (versions.length === 0) {
    // Fallback if network fails during build
    md += `
## Versión v5.0.4 <span class="custom-badge required">Última Versión</span>

* **Fecha de lanzamiento:** 31 de octubre de 2026
* **Compatibilidad:** Paper 26.1 - 26.3, Spigot 1.17 - 1.21.x
* **Novedades principales:**
  * Soporte nativo para Paper 26.x y Java 25 LTS mediante el adaptador \`v26_3_R1\`.
  * Suite completa de bans e IP bans con panel interactivo (\`/bangui\`).
  * Blindaje total del inventario de Staff Mode contra exploits y manipulación de ítems.
  * Corrección del lanzamiento de ojos de ender en el gadget de RTP.
`
  } else {
    versions.forEach((v, idx) => {
      const isLatest = idx === 0
      const tag = v.version_number || 'v5.x'
      const name = v.name || `StaffPlus ${tag}`
      const date = formatDate(v.date_published)
      const loaders = (v.loaders || ['paper', 'spigot', 'purpur']).map(l => `\`${l}\``).join(' ')
      const minMc = v.game_versions && v.game_versions.length > 0 ? v.game_versions[0] : '1.17'
      const maxMc = v.game_versions && v.game_versions.length > 0 ? v.game_versions[v.game_versions.length - 1] : '26.3'
      const mcRange = `${minMc} — ${maxMc}`

      let primaryFile = null
      if (Array.isArray(v.files) && v.files.length > 0) {
        primaryFile = v.files.find(f => f.primary) || v.files[0]
      }

      md += `
## ${name} ${isLatest ? '<span class="custom-badge required">Última Versión</span>' : '<span class="custom-badge optional">Versión Anterior</span>'}

* 📅 **Fecha:** ${date}
* 🎮 **Minecraft:** \`${mcRange}\`
* ⚙️ **Plataformas:** ${loaders}
${primaryFile ? `* 💾 **Descarga directa:** [\`${primaryFile.filename}\`](${primaryFile.url}) (${(primaryFile.size / 1024 / 1024).toFixed(2)} MB)` : ''}
* 🌐 **Ficha en Modrinth:** [Ver versión ${tag}](https://modrinth.com/plugin/staff-plus/version/${tag})

### 📋 Notas de la Versión:

${v.changelog && v.changelog.trim().length > 0 ? v.changelog.trim() : '_No se especificaron notas adicionales para esta versión._'}

---
`
    })
  }

  fs.writeFileSync(targetFile, md, 'utf-8')
  console.log(`[Sync-Updates] ✅ Archivo generado exitosamente en: ${targetFile}`)
}

generateChangelog().catch(err => {
  console.error('[Sync-Updates] Error fatal:', err)
  process.exit(1)
})
