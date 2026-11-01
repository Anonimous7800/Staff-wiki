# Advertencias y Notas (/warn, /notes)

StaffPlus cuenta con un historial disciplinario acumulativo para registrar faltas leves y dejar antecedentes internos que facilitan la toma de decisiones del equipo.

---

## ⚠️ Sistema de Advertencias (/warn)

Permite llamar la atención formalmente a un usuario. Si el jugador acumula un número predeterminado de faltas, el sistema puede sancionarlo de manera automática.

### Comandos
* **Advertir a un jugador:**
  ```bash
  /warn <jugador> <motivo>
  ```
  *(Permiso: `staff.warn`)*
* **Consultar advertencias de un usuario:**
  ```bash
  /warn <jugador>
  ```
* **Limpiar advertencias:**
  ```bash
  /warn clear <jugador>
  ```

### Umbral de Sanción Automática (Auto-Ban)
En `plugins/StaffPlus/config.yml`:

```yaml
warnings-module:
  enabled: true
  # Cantidad de advertencias antes de ejecutar la sanción automática (0 para desactivar)
  maximum: 3
  # Comando ejecutado al alcanzar el límite de advertencias
  ban-command: "tempban %player% 3d Has alcanzado el límite de 3 advertencias."
  # Tiempo en segundos para que una advertencia expire y se borre sola (7 días por defecto)
  clear: 604800
  # Si el nombre del staff que puso la advertencia es visible en las interfaces
  show-issuer: true
```

---

## 📝 Notas Internas del Staff (/notes)

Las notas son registros confidenciales visibles exclusivamente para el equipo de moderación. Sirven para anotar sospechas, acuerdos con el usuario o antecedentes de interés que el jugador no debe ver.

### Comandos
* **Añadir una nota interna:**
  ```bash
  /notes <jugador> <texto de la nota>
  ```
* **Leer todas las notas de un usuario:**
  ```bash
  /notes <jugador>
  ```
* **Eliminar una nota por su identificador:**
  ```bash
  /notes remove <jugador> <id>
  ```
*(Permiso requerido: `staff.warn`)*

