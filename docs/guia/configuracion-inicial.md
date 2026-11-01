# Configuración Inicial

Al iniciar el plugin por primera vez, se creará la carpeta `plugins/StaffPlus/` con varios archivos clave:

* `config.yml`: Archivo principal de opciones, módulos y permisos.
* `bans.yml`: Base de datos de sanciones y registro histórico de direcciones IP.
* `lang_es.properties` (y otros idiomas): Textos y mensajes del plugin personalizables.

---

## 🌐 Configurar el Idioma en Español

Para que todos los mensajes, alertas e interfaces aparezcan en español:
1. Abre `plugins/StaffPlus/config.yml`.
2. Modifica la opción `lang`:
   ```yaml
   # Idiomas disponibles: lang_en, lang_es, lang_fr, lang_de, lang_nl, etc.
   lang: "lang_es"
   ```
3. Guarda el archivo y aplica los cambios con:
   ```bash
   /staffplus reload
   ```

---

## ⚙️ Opciones Esenciales en `config.yml`

```yaml
# Utilizar soporte BungeeCord si tu servidor es parte de una red
bungee: false

# Color del cristal en las interfaces gráficas (0 = blanco, 1 = naranja, etc.)
glass-color: 0

# Comandos que los moderadores no pueden usar en modo normal
blocked-commands: "/pay, /trade"

# Comandos prohibidos mientras se está en Modo Staff (/staff)
blocked-mode-commands: "/tpa, /tpahere, /sethome, /home"
```

---

## 🔄 Recargar Configuración

Para aplicar modificaciones realizadas en `config.yml` o en los archivos de idioma sin necesidad de reiniciar todo el servidor, usa:

```text
/staffplus reload
```
*(Requiere el permiso `staff.staffplus`)*.

