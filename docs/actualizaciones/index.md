---
title: Registro de Actualizaciones
description: Historial de versiones y changelog automático de StaffPlus
---

# 🚀 Registro de Actualizaciones (Changelog)

> 🔄 **Página Automatizada:** Esta sección se sincroniza y compila automáticamente cada vez que se publica una nueva actualización en [Modrinth](https://modrinth.com/plugin/staff-plus) o en GitHub.

---

## Staffplus 5.0.4 <span class="custom-badge required">Última Versión</span>

* 📅 **Fecha:** 31 de octubre de 2026
* 🎮 **Minecraft:** `1.17 — 26.3`
* ⚙️ **Plataformas:** `bukkit` `paper` `spigot`
* 💾 **Descarga directa:** [`staff-5.0.4.jar`](https://cdn.modrinth.com/data/QQXQVULO/versions/rp1ewjRX/staff-5.0.4.jar) (1.34 MB)
* 🌐 **Ficha en Modrinth:** [Ver versión 5.0.4](https://modrinth.com/plugin/staff-plus/version/5.0.4)

### 📋 Notas de la Versión:

📦 StaffPlus v5.0.4 — Release Notes
🚀 Compatibility & Performance
- Improved automatic Bukkit, Paper 26.x, and Minecraft 1.21.x version detection.
- Added support for protocols v26_1_R1, v26_2_R1, v26_3_R1, and v1_21_R1.
- Reduced compatibility issues and NMS-related errors.
- Improved configuration and data file handling.
🛡️ Advanced Punishment System
- Added /ban, /tempban, /banip, /tempbanip, /unban, /unbanip, and /baninfo commands.
- Added player IP history tracking.
- Introduced a graphical punishment interface with /bangui.
- Integrated punishment actions directly into /examine.
- Added redesigned kick and ban screens with detailed punishment information.
🔒 Staff Mode Protection
- Prevents staff mode items from being moved, removed, or replaced.
- Added protection against creative inventory manipulation.
- Blocks item dropping (Q) and offhand swapping (F).
- Prevents accidental interactions with entities and armor stands.
- Disabled ground item pickup while in Staff Mode.
🐛 Critical Bug Fixes
- Fixed the Ender Eye issue when using RTP.
- Improved protocol adapter stability.
- Unified all 14 modules into a single distributable JAR.
- Bundled required dependencies for easier installation.
📌 Summary: StaffPlus 5.0.4 brings improved compatibility with newer Minecraft versions, a complete ban and IP punishment system, stronger Staff Mode protection, and important stability fixes.

---

## Staffplus 5.0.1 <span class="custom-badge optional">Versión Anterior</span>

* 📅 **Fecha:** 28 de julio de 2026
* 🎮 **Minecraft:** `1.17 — 26.2`
* ⚙️ **Plataformas:** `bukkit` `paper` `spigot`
* 💾 **Descarga directa:** [`staff-5.00.jar`](https://cdn.modrinth.com/data/QQXQVULO/versions/dVOozxaJ/staff-5.00.jar) (1.25 MB)
* 🌐 **Ficha en Modrinth:** [Ver versión 5.0.0](https://modrinth.com/plugin/staff-plus/version/5.0.0)

### 📋 Notas de la Versión:

# 🚀 Improved Bukkit Version Detection
Reworked the server version parser to fully support Paper's modern versioning scheme (e.g. 26.x.x instead of the legacy 1.x.x format).
Ensures the correct protocol adapter is selected automatically instead of disabling the plugin on newer server versions.
# 🛡️ Crash-Resistant Protocol Adapters
Refactored the following protocol modules:
Protocol_v26_1_R1
Protocol_v26_2_R1
Protocol_v26_3_R1
Protocol_v1_21_R1
Replaced direct dependencies on version-specific (obfuscated) NMS classes with stable Bukkit/Paper APIs:
PersistentDataContainer for custom data storage
hidePlayer() / showPlayer() for vanish handling
Kyori Adventure Components for JSON text and hover events
Greatly improves compatibility across future Paper updates and significantly reduces the risk of plugin crashes after minor server updates.

---

## Staff-plus 4.0.0 <span class="custom-badge optional">Versión Anterior</span>

* 📅 **Fecha:** 17 de diciembre de 2025
* 🎮 **Minecraft:** `1.17 — 1.21.11`
* ⚙️ **Plataformas:** `bukkit` `paper` `spigot`
* 💾 **Descarga directa:** [`Staff+.jar`](https://cdn.modrinth.com/data/QQXQVULO/versions/FThgB96b/Staff%2B.jar) (0.90 MB)
* 🌐 **Ficha en Modrinth:** [Ver versión 4.0.0](https://modrinth.com/plugin/staff-plus/version/4.0.0)

### 📋 Notas de la Versión:

✅ 12 idiomas agregados (DE, EN, ES, FR, HR, HU, IT, NL, NO, PT, SV, ZH)
✅ APIs de Bukkit deprecadas actualizadas
✅ Sistema de recogida de items corregido (Cuerda)
✅ Visualización de cofres sin eliminar items
✅ 11 adaptadores de versión reestructurados
✅ Compatible con Minecraft 1.17 - 1.21.11

---
