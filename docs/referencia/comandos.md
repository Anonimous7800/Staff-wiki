# Lista Completa de Comandos

A continuación se detalla la totalidad de los comandos incluidos en **StaffPlus v5.0.4**:

| Comando | Sintaxis | Descripción | Permiso Requerido |
| :--- | :--- | :--- | :--- |
| **`/staff`** | `/staff [jugador] [enable\|disable]` | Activa o desactiva el Modo Staff y entrega los gadgets. | `staff.mode` |
| **`/freeze`** | `/freeze <jugador> [enable\|disable]` | Congela o descongela a un jugador para revisión. | `staff.freeze` |
| **`/examine`** | `/examine <jugador>` | Inspecciona el inventario, armadura y estado de un jugador. | `staff.examine` |
| **`/bangui`** | `/bangui [jugador]` | Abre el menú gráfico interactivo de sanciones. | `staffplus.ban` |
| **`/ban`** | `/ban <jugador> [duración] [razón] [-s]` | Aplica un baneo permanente o temporal a una cuenta. | `staffplus.ban` |
| **`/tempban`** | `/tempban <jugador> <duración> [razón] [-s]` | Aplica un baneo temporal con duración explícita. | `staffplus.tempban` |
| **`/banip`** | `/banip <jugador\|IP> [duración] [razón] [-s]` | Aplica un bloqueo de dirección IP permanente o temporal. | `staffplus.banip` |
| **`/tempbanip`** | `/tempbanip <jugador\|IP> <duración> [razón] [-s]` | Aplica un baneo temporal a una dirección IP. | `staffplus.banip` |
| **`/unban`** | `/unban <jugador>` | Levanta el baneo de un jugador. | `staffplus.unban` |
| **`/unbanip`** | `/unbanip <jugador\|IP>` | Levanta el bloqueo de una dirección IP. | `staffplus.unban` |
| **`/baninfo`** | `/baninfo <jugador\|IP>` | Muestra la información y tiempo restante de un baneo. | `staffplus.baninfo` |
| **`/vanish`** | `/vanish [total\|list] [jugador] [on\|off]` | Alterna el modo invisible total o en tablist. | `staff.vanish.total` / `list` |
| **`/sc`** | `/sc [mensaje]` | Envía un mensaje al chat de staff o alterna el modo. | `staff.staffchat` |
| **`/warn`** | `/warn <jugador> <razón>` | Añade una advertencia formal a un usuario. | `staff.warn` |
| **`/notes`** | `/notes <jugador> [nota]` | Añade o consulta notas internas confidenciales. | `staff.warn` |
| **`/cps`** | `/cps <jugador>` | Inicia una prueba de velocidad de clics (10s). | `staff.cps` |
| **`/follow`** | `/follow <jugador>` | Monta a un jugador para seguir sus movimientos. | `staff.follow` |
| **`/report`** | `/report <jugador> <motivo>` | Envía una denuncia a los miembros del staff conectados. | Ninguno (Jugador) |
| **`/ticket`** | `/ticket <mensaje>` | Abre un ticket de asistencia técnica al equipo. | Ninguno (Jugador) |
| **`/chat`** | `/chat <clear\|toggle\|slow> [args]` | Administra el chat global (limpieza, bloqueo o lentitud). | `staff.chat.*` |
| **`/alerts`** | `/alerts <namechange\|mention\|xray> [args]` | Activa o desactiva alertas sonoras y visuales. | `staff.alerts.*` |
| **`/revive`** | `/revive [jugador]` | Restaura el inventario que el jugador tenía al morir. | `staff.revive` |
| **`/strip`** | `/strip <jugador>` | Remueve y deposita en el suelo la armadura del jugador. | `staff.strip` |
| **`/clear`** | `/clear <jugador>` | Vacía el inventario completo de un usuario. | `staff.staffplus.clearinv` |
| **`/eview`** | `/eview <jugador>` | Inspecciona el cofre de ender (Ender Chest) del usuario. | `staff.examine` |
| **`/personnel`** | `/personnel [all\|online\|away\|offline]` | Muestra la lista de los miembros del equipo. | `staff.member` |
| **`/staffplus`** | `/staffplus reload` | Recarga los archivos de configuración y mensajes. | `staff.staffplus` |
| **`/register`** | `/register <pass> <confirm>` | Registra la contraseña de seguridad del staff. | `staff.member` |
| **`/login`** | `/login <pass>` | Inicia sesión para desbloquear la cuenta de staff. | `staff.member` |
| **`/changepassword`** | `/changepassword <actual> <nueva>` | Cambia tu contraseña interna de staff. | `staff.member` |
| **`/resetPassword`** | `/resetPassword <jugador> <nueva>` | Restablece la contraseña de otro miembro del staff. | `staff.staffplus.resetpassword` |

