# Gadgets de la Hotbar

Cuando un moderador ingresa al Modo Staff, su barra de acceso rápido se equipa con las siguientes herramientas interactivas:

| Slot | Objeto | Nombre | Función Principal |
| :---: | :--- | :--- | :--- |
| **1** | `COMPASS` | **Propulsor (Launcher)** | Impulsa al moderador en la dirección en que está mirando a gran velocidad. |
| **2** | `ENDER_EYE` | **Teleport Aleatorio (RTP)** | Teletransporta instantáneamente al moderador hacia un jugador aleatorio sin lanzar proyectiles. |
| **3** | `INK_SAC` | **Alternar Vanish** | Activa o desactiva la invisibilidad total con un clic derecho. |
| **4** | `PAPER` | **Centro de GUIs (GUI Hub)** | Abre el panel con los reportes pendientes de resolución y jugadores minando bajo tierra. |
| **5** | `PLAYER_HEAD` | **Lista de Staff** | Muestra qué miembros del staff están conectados y cuántos están en modo servicio. |
| **6** | `BLAZE_ROD` | **Congelar (Freeze)** | Hace clic derecho sobre un jugador sospechoso para paralizarlo al instante. |
| **7** | `CLOCK` | **Test de CPS** | Inicia una prueba de velocidad de clics sobre el jugador objetivo durante 10 segundos. |
| **8** | `CHEST` | **Examinar Inventario** | Abre la interfaz de inspección completa del jugador (inventario, armadura, ping, IP, etc.). |
| **9** | `LEAD` | **Seguir / Montar (Follow)** | Monta de forma invisible sobre el jugador para seguir sus movimientos en primera persona. |

---

## 🧭 1. Propulsor (Compass)
* **Acción:** Clic derecho apuntando en cualquier dirección.
* **Comportamiento:** Aplica un vector de velocidad hacia adelante para recorrer grandes distancias de manera rápida.
* **Configuración:** La velocidad se gradúa en `config.yml` con la clave `velocity` (por defecto `5`).

## 👁️ 2. Teleport Aleatorio (Random Teleport)
* **Acción:** Clic derecho.
* **Comportamiento:** Selecciona a un jugador activo (no staff) y te sitúa detrás de él.
* **Blindaje:** En esta versión, se ha bloqueado completamente el lanzamiento físico del ojo de ender para evitar que vuele por el mapa.

## 📄 4. Centro de GUIs (GUI Hub)
Al hacer clic derecho con el papel se abre un menú con dos opciones principales:
1. **Reportes Pendientes:** Lista interactiva con las denuncias enviadas por los usuarios.
2. **Miners / Sospecha de X-Ray:** Lista de todos los jugadores que se encuentran a una coordenada Y inferior a 16 (configurable).

## 📊 7. Test de Clics por Segundo (CPS)
* **Acción:** Clic derecho sobre un jugador sospechoso de *autoclicker* o macros.
* **Comportamiento:** Durante 10 segundos registra los clics realizados. Si supera el umbral configurado (16 CPS por defecto), envía una alerta destacada en rojo al staff.

## 🧰 8. Examinador (Chest)
* **Acción:** Clic derecho sobre un jugador o ejecutando `/examine <jugador>`.
* **Comportamiento:** Permite ver todo el inventario, cambiar de slot e interactuar con botones directos para advertir, congelar o sancionar.

