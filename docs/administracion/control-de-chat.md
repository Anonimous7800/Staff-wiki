# Control y Filtro de Chat (/chat)

El módulo de chat ofrece herramientas de control masivo para moderar el canal de conversación general y evitar spam, inundaciones de mensajes o palabras inapropiadas.

---

## 🧹 Comandos de Control de Chat

* **Limpiar el chat global:**
  ```bash
  /chat clear
  ```
  *(Permiso: `staff.chat.clear`)*
  Envía 100 líneas en blanco para limpiar la pantalla de todos los jugadores ante mensajes de odio, spam o enlaces no permitidos.

* **Activar/Desactivar el chat global:**
  ```bash
  /chat toggle
  ```
  *(Permiso: `staff.chat.toggle`)*
  Silencia el chat general completamente para todos los usuarios ordinarios (útil durante eventos, reinicios o anuncios importantes).

* **Ralentizar el chat (Slow Mode):**
  ```bash
  /chat slow [segundos]
  ```
  *(Permiso: `staff.chat.slow`)*
  Establece un tiempo de espera obligatorio entre cada mensaje enviado por los jugadores (por defecto 5 segundos).

---

## 🛑 Filtro Automático de Palabras (Blacklist)

StaffPlus incluye un filtro heurístico configurable en `config.yml` dentro de la sección `chat-module.blacklist-module`:

```yaml
blacklist-module:
  enabled: true
  # Carácter que reemplaza las letras bloqueadas
  character: "*"
  # Detección de palabras compuestas (por ejemplo, detectar la palabra raíz dentro de insultos compuestos)
  merging: true
  # Lista de palabras bloqueadas separadas por comas
  words: insulto1, insulto2, insulto3
  # Bloqueo de enlaces por extensiones de dominio
  domains: com, net, org, io, es, gg
  # Variaciones detectadas como punto para evitar evasiones tipo "servidor(dot)com"
  periods: (), (dot), [dot], .
  # Palabras permitidas que no deben ser censuradas por error de fusión
  allowed: compas, bypass, asociar
```

