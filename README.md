# 📖 StaffPlus Wiki

Documentación oficial y Wiki de **StaffPlus** (Plugin de Moderación para servidores de Minecraft Paper y Spigot).

Construido con **[VitePress](https://vitepress.dev/)**.

---

## 🚀 Cómo ejecutar la Wiki en local

1. Asegúrate de tener instalado [Node.js](https://nodejs.org/) (versión 18 o superior).
2. Abre una terminal dentro de esta carpeta (`staff-plus-wiki`).
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Inicia el servidor de desarrollo en vivo:
   ```bash
   npm run dev
   ```
5. Abre en tu navegador web la dirección indicada (por defecto `http://localhost:5173`).

---

## 📦 Compilar para producción (HTML estático)

```bash
npm run build
```
El sitio web compilado se generará en `docs/.vitepress/dist`.
