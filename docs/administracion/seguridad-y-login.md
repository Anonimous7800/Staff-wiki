# Seguridad y Contraseñas de Staff

Para evitar que una cuenta con permisos administrativos sea vulnerada si un moderador sufre un robo de credenciales, StaffPlus incluye un sistema interno de autenticación de dos factores por contraseña con cifrado **BCrypt**.

---

## 🔐 Comandos del Sistema de Seguridad

* **Registrar una contraseña inicial:**
  ```bash
  /register <contraseña> <confirmar-contraseña>
  ```
* **Iniciar sesión al entrar al servidor:**
  ```bash
  /login <contraseña>
  ```
* **Cambiar tu propia contraseña:**
  ```bash
  /changepassword <contraseña-actual> <nueva-contraseña>
  ```
* **Restablecer la contraseña de otro miembro (Solo Administradores):**
  ```bash
  /resetPassword <jugador> <nueva-contraseña>
  ```
  *(Permiso requerido: `staff.staffplus.resetpassword`)*

---

## 🛡️ Medidas de Bloqueo Pre-Login

Cuando un miembro del staff con el permiso `staff.member` se conecta al servidor y el módulo de seguridad está activado:
1. **Inmovilización Completa:** El jugador es congelado automáticamente hasta que introduzca su contraseña.
2. **Bloqueo de Comandos:** No puede ejecutar comandos de juego ni comandos de moderación hasta autenticarse.
3. **Expulsión por Intentos Erróneos:** Si introduce una contraseña incorrecta, es expulsado inmediatamente con el mensaje configurado en `login.kick-message`.
4. **Cifrado Seguro:** Las contraseñas nunca se almacenan en texto claro; se guardan con *hash* y *salt* seguro mediante la librería BCrypt.

