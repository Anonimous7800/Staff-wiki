# Alertas y Detección de X-Ray (/alerts)

StaffPlus supervisa en segundo plano diversos comportamientos de los jugadores y emite notificaciones instantáneas al equipo de moderación.

---

## 💎 1. Alertas de Minado / X-Ray

Cada vez que un jugador pica un bloque valioso catalogado en la lista de vigilancia, todos los miembros del staff con el permiso `staff.alerts.xray` reciben una alerta en el chat indicando el jugador, el mineral y las coordenadas.

### Configuración de Minerales en `config.yml`
```yaml
alerts-module:
  sound: ORB_PICKUP
  xray-alerts:
    enabled: true
    # Lista de bloques que disparan la alerta
    blocks: SPAWNER, ANCIENT_DEBRIS, EMERALD_ORE, DEEPSLATE_EMERALD_ORE, DIAMOND_ORE, DEEPSLATE_DIAMOND_ORE, GOLD_ORE
```

---

## 📢 2. Alertas de Menciones

Si un jugador escribe en el chat público el nombre exacto de un moderador conectado, el moderador recibe una notificación sonora y visual para atenderlo rápidamente.
*(Permiso requerido: `staff.alerts.mention`)*.

---

## 🏷️ 3. Alertas de Cambio de Nombre (Name Change)

Cuando un usuario que ya ha jugado en el servidor ingresa con un nombre nuevo tras haberlo cambiado en Mojang o en el launcher:
* El plugin detecta la coincidencia de UUID y notifica a los administradores:
  ```text
  [Staff+] El jugador AntiguoNombre ahora se llama NuevoNombre.
  ```
*(Permiso requerido: `staff.alerts.namechange`)*.

---

## ⚙️ Comando de Gestión de Alertas

Los miembros del equipo pueden activar o desactivar individualmente qué alertas desean recibir en pantalla:

```bash
/alerts <namechange|mention|xray> [enable|disable]
```

