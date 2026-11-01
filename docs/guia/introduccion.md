# Introducción a StaffPlus

**StaffPlus** es un plugin integral de administración y moderación diseñado específicamente para servidores de Minecraft. Su propósito es brindar al equipo de moderación (helpers, moderadores y administradores) todas las herramientas necesarias para supervisar el servidor, detectar tramposos y sancionar infracciones sin interferir con la experiencia normal de juego.

---

## 🌟 Características Principales

* **Modo Staff Modular (`/staff`):** Al activarse, guarda el inventario real del moderador y le entrega una barra de herramientas táctica (compás de propulsión, teleport aleatorio, vanish, CPS test, inspección, etc.).
* **Blindaje Anti-Exploits:** Los objetos de moderación están totalmente bloqueados; no pueden tirarse, intercambiarse a la mano secundaria, ni traspasarse a cofres o soportes de armaduras.
* **Sistema Integral de Bans e IP Bans:** Permite aplicar sanciones temporales o definitivas por nombre o IP, además de un panel gráfico intuitivo (`/bangui`).
* **Inspección Profunda (`/examine`):** Muestra el contenido del inventario, armadura, ping, nivel de comida, coordenadas, historial de infracciones y botones de sanción instantánea.
* **Alertas de X-Ray y Menciones:** Notifica al equipo cuando un usuario extrae diamantes, esmeraldas u otros minerales de forma sospechosa.
* **Control de Chat:** Limpieza rápida de chat (`/chat clear`), modo lento (`/chat slow`) y filtro automático de dominios y palabras malsonantes.

---

## 📋 Requisitos del Servidor

| Componente | Requisito Mínimo | Recomendado |
| :--- | :--- | :--- |
| **Software de Servidor** | Paper, Purpur o Spigot 1.8+ | **Paper 26.3** / Paper 1.21+ |
| **Java** | Java 8 (para versiones antiguas) | **Java 21 / Java 25 LTS** |
| **Permisos** | LuckPerms, PermissionsEx o similar | **LuckPerms** |
| **Base de Datos** | Archivos planos (.yml) | **MySQL / MariaDB** (para networks) |

---

## 🚀 Novedades de la Versión 5.0.4

* **Soporte Paper 26.x:** Incorporación del nuevo adaptador de protocolo `v26_3_R1` con detección inteligente del versionado moderno de Paper.
* **Módulo de Bans Renovado:** Persistencia independiente en `bans.yml`, historial cruzado de IPs y nombres para detección de multicuentas.
* **Solución de Bugs Críticos:**
  * Corregido el lanzamiento involuntario del Ojo de Ender en el gadget de RTP.
  * Solucionado el error de arranque por `bans.yml` no encontrado en el JAR.
  * Implementado `EntityPickupItemEvent` para impedir que moderadores en vanish recojan objetos del suelo.

