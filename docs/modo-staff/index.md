# Modo Staff (Staff Mode)

El **Modo Staff** es el corazón operativo de StaffPlus. Al activarse mediante el comando `/staff`, el moderador ingresa a un entorno completamente optimizado para la vigilancia y resolución de incidencias.

---

## ⚡ Activación y Comandos

* **Activar/Desactivar tu propio modo staff:**
  ```bash
  /staff
  ```
* **Activar/Desactivar para otro miembro del equipo:**
  ```bash
  /staff <jugador> [enable|disable]
  ```
  *(Permiso requerido: `staff.mode`)*

---

## 🛡️ ¿Qué ocurre al activar el Modo Staff?

1. **Resguardo de Inventario:** El inventario actual del moderador (objetos, armadura, niveles de experiencia y mano secundaria) se guarda en un archivo encriptado en el servidor.
2. **Carga de Gadgets Tácticos:** La barra rápida se reemplaza automáticamente con las 9 herramientas de supervisión configuradas.
3. **Modo Creativo y Vuelo Automático:** El jugador pasa a modo creativo y se le otorga la habilidad de volar de forma inmediata.
4. **Vanish Total:** El usuario se vuelve completamente invisible tanto en el juego como en la lista de jugadores (Tablist).
5. **Invulnerabilidad y Hambre Congelada:** No recibe daño de entidades ni del entorno y no gasta puntos de comida.
6. **Protección Anti-Interferencia:** No puede romper ni colocar bloques accidentalmente mientras patrulla.

---

## 🔄 Restauración al Desactivar

Al salir del modo staff mediante `/staff`:
* Se retiran las herramientas de moderación.
* Se restaura con exactitud su inventario original, posición de armadura y puntos de experiencia.
* Si está activada la opción `original-location: true`, se devuelve al jugador a las coordenadas exactas en las que se encontraba antes de entrar en servicio.

