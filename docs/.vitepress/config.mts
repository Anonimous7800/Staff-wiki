import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/Staff-wiki/',
  lang: 'es-ES',
  title: 'StaffPlus Wiki',
  description: 'Documentación oficial de StaffPlus - La suite definitiva de moderación para Minecraft',
  lastUpdated: true,
  cleanUrls: true,

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:title', content: 'StaffPlus Wiki' }],
    ['meta', { name: 'og:description', content: 'Guía y documentación completa del plugin de moderación StaffPlus para Paper y Spigot' }]
  ],

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'StaffPlus Wiki',
    
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: 'Buscar',
                buttonAriaLabel: 'Buscar documentación'
              },
              modal: {
                noResultsText: 'No se encontraron resultados para',
                resetButtonTitle: 'Limpiar búsqueda',
                footer: {
                  selectText: 'para seleccionar',
                  navigateText: 'para navegar',
                  closeText: 'para cerrar'
                }
              }
            }
          }
        }
      }
    },

    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Guía', link: '/guia/introduccion' },
      { text: 'Modo Staff', link: '/modo-staff/' },
      { text: 'Moderación', link: '/moderacion/sistema-de-bans' },
      { text: 'Comandos', link: '/referencia/comandos' },
      { text: 'Permisos', link: '/referencia/permisos' },
      { text: 'Modrinth', link: 'https://modrinth.com/plugin/staff-plus' },
      {
        text: 'v5.0.4',
        items: [
          { text: 'Changelog / Novedades', link: '/guia/introduccion#novedades-de-la-version-504' },
          { text: 'Descargar en Modrinth', link: 'https://modrinth.com/plugin/staff-plus' },
          { text: 'Repositorio GitHub', link: 'https://github.com/Anonimous7800/staff-pluss' }
        ]
      }
    ],

    sidebar: [
      {
        text: 'Guía de Inicio',
        collapsed: false,
        items: [
          { text: 'Introducción y Requisitos', link: '/guia/introduccion' },
          { text: 'Instalación', link: '/guia/instalacion' },
          { text: 'Configuración Inicial', link: '/guia/configuracion-inicial' },
          { text: 'Base de Datos (MySQL / SQLite)', link: '/guia/base-de-datos' }
        ]
      },
      {
        text: 'Modo Staff (Staff Mode)',
        collapsed: false,
        items: [
          { text: 'Visión General y Activación', link: '/modo-staff/' },
          { text: 'Gadgets de la Hotbar', link: '/modo-staff/herramientas-hotbar' },
          { text: 'Blindaje Anti-Exploit de Inventario', link: '/modo-staff/bloqueo-inventario' },
          { text: 'Módulos y Gadgets Personalizados', link: '/modo-staff/modulos-personalizados' }
        ]
      },
      {
        text: 'Herramientas de Moderación',
        collapsed: false,
        items: [
          { text: 'Sistema de Bans e IP Bans', link: '/moderacion/sistema-de-bans' },
          { text: 'Panel Gráfico (/bangui)', link: '/moderacion/ban-gui' },
          { text: 'Congelar Jugadores (/freeze)', link: '/moderacion/congelar-jugadores' },
          { text: 'Inspección de Inventario (/examine)', link: '/moderacion/examinar-inventario' },
          { text: 'Reportes y Tickets de Soporte', link: '/moderacion/reportes-y-tickets' },
          { text: 'Advertencias y Notas (/warn, /notes)', link: '/moderacion/advertencias-y-notas' }
        ]
      },
      {
        text: 'Administración y Utilidades',
        collapsed: false,
        items: [
          { text: 'Modo Invisible (/vanish)', link: '/administracion/vanish-invisible' },
          { text: 'Control y Filtro de Chat', link: '/administracion/control-de-chat' },
          { text: 'Chat Interno de Staff (/sc)', link: '/administracion/chat-de-staff' },
          { text: 'Alertas de X-Ray y Menciones', link: '/administracion/alertas-y-xray' },
          { text: 'Seguridad y Contraseñas de Staff', link: '/administracion/seguridad-y-login' }
        ]
      },
      {
        text: 'Referencia Rápida',
        collapsed: false,
        items: [
          { text: 'Lista Completa de Comandos', link: '/referencia/comandos' },
          { text: 'Tabla de Permisos', link: '/referencia/permisos' }
        ]
      },
      {
        text: 'Desarrolladores',
        collapsed: true,
        items: [
          { text: 'StaffPlus API (Maven / Gradle)', link: '/desarrollador/api' },
          { text: 'Eventos Personalizados', link: '/desarrollador/eventos' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Anonimous7800/staff-pluss' }
    ],

    footer: {
      message: 'Wiki oficial de StaffPlus desarrollada para la comunidad de Minecraft.',
      copyright: 'Copyright © 2026 StaffPlus Team'
    },

    docFooter: {
      prev: 'Página anterior',
      next: 'Página siguiente'
    },

    outline: {
      label: 'En esta página',
      level: [2, 3]
    }
  }
})

