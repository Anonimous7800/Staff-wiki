# Congelar Jugadores (/freeze)

La función de congelamiento (Freeze) permite a los moderadores paralizar a un jugador para realizar una revisión de seguridad (Screenshare) o impedir que continúe jugando mientras se aclara una posible infracción.

---

## ❄️ Comandos de Congelamiento

* **Congelar o descongelar a un jugador:**
  ```bash
  /freeze <jugador> [enable|disable]
  ```
  *(Permiso requerido: `staff.freeze`)*
* **Mediante la Hotbar:**
  Equípate la **Vara de Blaze** (Slot 6) y haz clic derecho directamente sobre el jugador.

---

## 🚫 Restricciones del Jugador Congelado

1. **Movimiento Bloqueado:** No puede caminar, saltar ni teletransportarse.
2. **Interacciones Prohibidas:** No puede romper ni colocar bloques, ni interactuar con cofres o puertas.
3. **Protección de Combate:** No puede golpear a otros jugadores ni recibir daño de terceros mientras está paralizado.
4. **Mensaje Periódico en Pantalla:** Cada 5 segundos (configurable en `timer`) recibe un recordatorio acústico y un mensaje en el chat indicándole que está bajo revisión.
5. **Prompt GUI (Opcional):** Si se activa `prompt: true` en `config.yml`, al jugador se le abrirá un menú bloqueando su vista con las instrucciones exactas de soporte (por ejemplo, indicaciones para unirse al Discord oficial).

---

## 🏃 Castigo por Desconexión (Logout Ban)

Si el jugador intenta eludir la revisión saliéndose del servidor:
* El plugin detecta el cierre de sesión y ejecuta inmediatamente el comando configurado en `logout-commands`:
  ```yaml
  logout-commands: "ban %player% Has abandonado el servidor mientras estabas congelado para revisión."
  ```
* Se notifica a todo el equipo de staff de la evasión.

