# 📖 StaffPlus Wiki

Repositorio oficial de la documentación y Wiki de **StaffPlus** (Plugin de Moderación para servidores de Minecraft Paper y Spigot).

Inspirado en la estructura y diseño moderno de **[Bedrock-OSS/bedrock-wiki](https://github.com/Bedrock-OSS/bedrock-wiki)** y construido con **[VitePress](https://vitepress.dev/)**.

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

## 📦 Cómo compilar para producción (HTML estático)

Para generar la versión estática lista para subir a **GitHub Pages**, **Vercel** o cualquier servidor web:

```bash
npm run build
```

El sitio web generado quedará listo en la carpeta `docs/.vitepress/dist`. Para previsualizarlo:

```bash
npm run preview
```

---

## 🗂️ Estructura de Contenidos

* **Guía de Inicio:** Introducción, requisitos, instalación paso a paso, configuración inicial y bases de datos MySQL.
* **Modo Staff (Staff Mode):** Resumen de funcionamiento, guía exhaustiva de los 9 gadgets tácticos, blindaje anti-tamper de inventario y creación de módulos personalizados.
* **Herramientas de Moderación:** Sistema completo de bans e IP bans, panel gráfico interactivo (`/bangui`), congelamiento de jugadores (`/freeze`), inspección en vivo (`/examine`), reportes, tickets, advertencias y notas confidenciales.
* **Administración y Utilidades:** Invisibilidad total (`/vanish`), control global de chat, chat interno de staff (`/sc`), alertas de minado X-Ray y seguridad por contraseña (`/login`, `/register`).
* **Referencia Rápida:** Tabla completa con los más de 30 comandos y tabla exhaustiva de permisos para LuckPerms.
* **Para Desarrolladores:** Integración con la API de Java y suscripción a eventos de Bukkit.

