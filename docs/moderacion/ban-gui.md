# Panel Gráfico de Bans (/bangui)

Para facilitar la moderación sin tener que memorizar comandos o sintaxis de tiempo, StaffPlus incluye una interfaz gráfica interactiva completa.

---

## 🖥️ Apertura del Panel

* **Abrir panel general o sobre un jugador:**
  ```bash
  /bangui [jugador]
  ```
  *Permiso requerido:* `staffplus.ban`
  *Aliases disponibles:* `/banmenu`, `/banpanel`.

---

## 🧩 Componentes del Menú

### 1. Selector de Tipo de Sanción
* **Ban de Jugador (Cabeza de jugador):** Sanciona la cuenta/UUID del usuario.
* **Ban de IP (Bloque de redstone):** Sanciona la dirección IP asociada al usuario. Puedes alternar entre ambos modos con un solo clic.

### 2. Botones de Duración Rápida
* **1 Hora:** Para faltas leves o advertencias con suspensión.
* **1 Día:** Para conducta tóxica o insultos reiterados.
* **7 Días:** Para abuso de bugs menores o trampas moderadas.
* **30 Días:** Para faltas graves.
* **Permanente (Barrera):** Veto definitivo del servidor.

### 3. Presets de Motivos Comunes
* **Uso de Hacks / Cheats:** Trampas de movimiento, combate o visión.
* **Toxicidad / Spam:** Conducta antideportiva o inundación de mensajes.
* **Acoso / Lenguaje Inapropiado:** Falta de respeto grave a miembros de la comunidad.
* **Abuso de Bugs:** Explotación de errores para beneficio económico o ventajas de juego.

### 4. Gestor de Sanciones Activas (`BanListGui`)
Al pie de la interfaz, el botón de **Sanciones Activas** te permite ver una lista paginada de todos los jugadores e IPs baneados actualmente.
* Cada objeto muestra quién aplicó la sanción, la razón y el tiempo restante.
* **Desbanear en un clic:** Hacer clic izquierdo sobre cualquier sanción activa en la lista levanta el ban inmediatamente.

