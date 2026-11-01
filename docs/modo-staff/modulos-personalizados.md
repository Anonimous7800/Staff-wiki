# Módulos y Gadgets Personalizados

StaffPlus permite añadir un número ilimitado de herramientas personalizadas a la hotbar del Modo Staff mediante la sección `custom-modules` en `config.yml`.

---

## 🛠️ Tipos de Módulos Disponibles

| Tipo | Descripción | Placeholders Soportados |
| :--- | :--- | :--- |
| `COMMAND_STATIC` | Ejecuta un comando fijo como jugador cada vez que se hace clic. | Ninguno |
| `COMMAND_DYNAMIC` | Ejecuta un comando sustituyendo al usuario que hace clic y al jugador sobre el que se hace clic. | `%clicker%`, `%clicked%` |
| `COMMAND_CONSOLE` | Ejecuta un comando directamente desde la consola del servidor con los argumentos del jugador. | `%clicker%`, `%clicked%` |
| `ITEM` | Entrega un objeto especial con nombre, lore y encantamientos específicos (por ejemplo, varitas de WorldEdit o varas de empuje). | Ninguno |

---

## 📝 Ejemplos de Configuración

En `plugins/StaffPlus/config.yml`:

```yaml
staff-mode:
  custom-modules:
    # Ejemplo 1: Comando ejecutado por consola
    DesactivarStaff:
      enabled: true
      type: COMMAND_CONSOLE
      slot: 30
      item: OBSIDIAN
      name: "&bDesactivar Modo Staff"
      lore: "&7Haz clic para salir del servicio"
      command: "staff %clicker% disable"

    # Ejemplo 2: Comando dinámico sobre un jugador
    SancionarSospechoso:
      enabled: true
      type: COMMAND_DYNAMIC
      slot: 31
      item: REDSTONE_BLOCK
      name: "&cReportar a Supervisión"
      lore: "&7Notifica a los superiores sobre %clicked%"
      command: "sc Alerta: %clicker% está vigilando de cerca a %clicked%"

    # Ejemplo 3: Vara de empuje táctica
    VaraDeEmpuje:
      enabled: true
      type: ITEM
      slot: 32
      item: STICK
      name: "&ePalo de Seguridad"
      lore: "&7Úsalo para alejar usuarios molestos"
      enchantment: "knockback:2"
```

::: tip Asignación de Slots
Los slots van del `1` al `36` (correspondiendo al inventario completo del jugador). Para la barra rápida (hotbar), utiliza los slots del `1` al `9`.
:::

