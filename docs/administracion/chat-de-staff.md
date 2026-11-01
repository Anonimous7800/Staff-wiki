# Chat Interno de Staff (/sc)

El **Chat de Staff** proporciona un canal privado y seguro para que los miembros del equipo se comuniquen entre sí sin que los jugadores convencionales puedan leer sus mensajes.

---

## 💬 Formas de Comunicación

### 1. Comando Directo
* **Enviar un mensaje al chat interno:**
  ```bash
  /sc <mensaje>
  ```
  *(Permiso requerido: `staff.staffchat`)*

### 2. Alternar Modo de Chat
* Si ejecutas `/sc` sin argumentos, alternas tu modo de chat: a partir de ese momento, todo lo que escribas normalmente se enviará directamente al canal del staff sin necesidad de volver a escribir el comando.

### 3. Prefijo Rápido (Handle `@`)
En `config.yml` se puede configurar un carácter de acceso rápido (por defecto `@`).
* Si escribes en el chat normal empezando por `@`:
  ```text
  @chicos, vengan a revisar a este usuario en el spawn
  ```
* El plugin detectará el prefijo y redirigirá el mensaje automáticamente al chat de staff, suprimiendo la difusión pública.

