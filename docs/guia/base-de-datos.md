# Base de Datos (Flatfile y MySQL)

StaffPlus permite almacenar datos como advertencias, reportes, notas y estadísticas tanto en archivos planos YAML (`flatfile`) como en una base de datos centralizada **MySQL / MariaDB**.

---

## 📁 Almacenamiento por Defecto: Flatfile

Por defecto, el plugin guarda toda la información localmente en la carpeta del servidor:
* `plugins/StaffPlus/bans.yml` para las sanciones e historial de IPs.
* `plugins/StaffPlus/data/` para inventarios guardados e información de usuarios.

Esta modalidad es ideal para servidores individuales o entornos de prueba y no requiere configuración adicional.

---

## 🗄️ Configuración de MySQL

Si tienes una red de servidores conectada mediante BungeeCord o Velocity y quieres compartir reportes y advertencias entre modalidades:

1. Abre `plugins/StaffPlus/config.yml`.
2. Dirígete a la sección `storage`:
   ```yaml
   storage:
     type: "mysql"
     mysql:
       host: "127.0.0.1"
       port: 3306
       database: "minecraft_staffplus"
       user: "staffplus_user"
       password: "TuPasswordSeguro123"
       migrated: false
   ```
3. Guarda el archivo y reinicia el servidor.
4. El plugin creará automáticamente las tablas necesarias al iniciar la conexión mediante su gestor HikariCP.

