# Modo Invisible (/vanish)

El módulo de **Vanish** oculta al moderador de la vista de todos los jugadores ordinarios, permitiendo vigilar sin ser detectado.

---

## 👻 Tipos de Vanish

StaffPlus maneja dos niveles de invisibilidad:

1. **Vanish Total (`TOTAL`):**
   * Oculta el cuerpo del jugador por completo en el mundo.
   * Lo remueve del listado del Tab (Tablist).
   * Suprime los paquetes de sonido generados al abrir cofres o romper bloques.
   * Oculta las partículas y efectos de pociones.
   * Desactiva el objetivo de los mobs agresivos (los monstruos no te atacan ni te persiguen).
2. **Vanish de Lista (`LIST`):**
   * El jugador permanece visible en el mundo físico pero desaparece de la lista del Tab. Ideal para administradores que quieren jugar sin recibir solicitudes constantes de ayuda.

---

## ⌨️ Comandos

* **Alternar Vanish propio:**
  ```bash
  /vanish
  # Alias corto:
  /v
  ```
* **Alternar Vanish Total directamente:**
  ```bash
  /v total
  ```
* **Ver quiénes están invisibles:**
  ```bash
  /v list
  ```
* **Alternar Vanish para otro jugador:**
  ```bash
  /v <jugador> [enable|disable]
  ```

---

## ⚙️ Opciones en `config.yml`

```yaml
vanish-module:
  enabled: true
  # Si los usuarios en vanish desaparecen del Tab
  tab-list: true
  # Si los usuarios en vanish aparecen en las sugerencias de autocompletado con Tab
  suggestions: false
  # Si un moderador en vanish puede escribir en el chat público
  chat: false
```

