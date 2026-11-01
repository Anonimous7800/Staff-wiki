# Tabla de Permisos

A continuación se presenta la lista completa de nodos de permisos para configurar en gestores como **LuckPerms**:

## 👑 Permiso Comodín (Wildcard)
* `staff.*`: Otorga acceso a prácticamente todas las funciones y comandos de moderación de StaffPlus (excepto las restricciones de bloqueo de comandos).

---

## 🛡️ Permisos de Modo Staff y Gadgets
| Permiso | Descripción |
| :--- | :--- |
| `staff.mode` | Permite usar `/staff` para entrar y salir del Modo Staff. |
| `staff.compass` | Permite usar el propulsor (brújula) en Modo Staff. |
| `staff.random-teleport` | Permite usar el teleport aleatorio (ojo de ender). |
| `staff.gui` | Permite abrir el GUI Hub (papel). |
| `staff.counter` | Permite abrir la lista de staff conectados (cabeza de jugador). |
| `staff.follow` | Permite seguir/montar a otros jugadores (rienda). |
| `staff.cps` | Permite iniciar pruebas de clics por segundo (reloj). |

---

## 🔨 Permisos de Sanciones y Moderación
| Permiso | Descripción |
| :--- | :--- |
| `staffplus.ban` | Permite usar `/ban` y abrir el menú gráfico `/bangui`. |
| `staffplus.tempban` | Permite usar `/tempban` para sanciones temporales. |
| `staffplus.banip` | Permite usar `/banip` y `/tempbanip` para sancionar direcciones IP. |
| `staffplus.unban` | Permite usar `/unban` y `/unbanip` para desbanear jugadores o IPs. |
| `staffplus.baninfo` | Permite consultar la información de un ban con `/baninfo`. |
| `staff.freeze` | Permite congelar jugadores con `/freeze` o la vara de blaze. |
| `staff.freeze.bypass` | Inmunidad: impide que el jugador con este permiso sea congelado. |
| `staff.examine` | Permite examinar el inventario de jugadores con `/examine` o el cofre. |
| `staff.examine.modify` | Permite retirar o alterar objetos dentro de la interfaz de `/examine`. |
| `staff.warn` | Permite emitir advertencias con `/warn` y gestionar `/notes`. |
| `staff.warn.bypass` | Inmunidad: impide recibir advertencias con `/warn`. |
| `staff.report` | Permite recibir alertas de reportes y gestionarlos. |
| `staff.report.bypass` | Inmunidad: impide que otros usuarios puedan reportar a este jugador. |

---

## 💬 Permisos de Chat y Vanish
| Permiso | Descripción |
| :--- | :--- |
| `staff.staffchat` | Permite leer y escribir en el chat de staff con `/sc` o el prefijo `@`. |
| `staff.vanish.total` | Permite usar `/vanish total` para invisibilidad completa. |
| `staff.vanish.list` | Permite usar `/vanish list` para ocultarse del tablist. |
| `staff.chat.clear` | Permite limpiar el chat global con `/chat clear`. |
| `staff.chat.toggle` | Permite silenciar o habilitar el chat con `/chat toggle`. |
| `staff.chat.slow` | Permite ralentizar la velocidad del chat con `/chat slow`. |
| `staff.blacklist` | Permite evadir el filtro de palabras prohibidas y enlaces. |
| `staff.tickets` | Permite recibir y contestar tickets de ayuda con `/ticket`. |

---

## 🚨 Permisos de Alertas y Administración
| Permiso | Descripción |
| :--- | :--- |
| `staff.alerts.xray` | Permite recibir avisos cuando alguien pica minerales valiosos. |
| `staff.alerts.mention` | Permite recibir avisos acústicos cuando mencionan tu nombre en el chat. |
| `staff.alerts.namechange` | Permite recibir avisos cuando un jugador entra con un nick cambiado. |
| `staff.revive` | Permite devolver el inventario a un jugador muerto con `/revive`. |
| `staff.strip` | Permite quitarle la armadura a un jugador con `/strip`. |
| `staff.member` | Identifica al usuario como miembro formal del staff (para login y listas). |
| `staff.staffplus` | Permite recargar la configuración con `/staffplus reload`. |
| `staff.staffplus.resetpassword` | Permite restablecer contraseñas de otros miembros del staff. |
| `staff.staffplus.hideip` | Muestra la IP en `/examine` y protege contra inspecciones no autorizadas. |
| `staff.staffplus.clearinv` | Permite limpiar inventarios con `/clear <jugador>`. |

