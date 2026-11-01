# Blindaje Anti-Exploit de Inventario

En muchas versiones antiguas de plugins de moderación, los moderadores podían accidentalmente (o intencionadamente) transferir objetos de su modo staff a otros jugadores, cofres o soportes de armaduras. En **StaffPlus 5.0.4**, se ha implementado un sistema estricto de **bloqueo inamovible (Hardware Inventory Lock)**.

---

## 🔒 Mecanismos de Protección Activos

### 1. Bloqueo de Movimiento en Hotbar e Inventario
* Queda anulado cualquier intento de arrastrar (`InventoryDragEvent`), hacer clic normal o usar atajos con los números `1` al `9` (`NUMBER_KEY`).
* El moderador no puede reorganizar los objetos de moderación ni cambiarlos de casilla.

### 2. Bloqueo en Modo Creativo (`InventoryCreativeEvent`)
* Aunque el modo staff asigne el modo de juego creativo para facilitar el vuelo y la patrulla, los moderadores tienen **restringido retirar objetos del catálogo de creativo** hacia su barra de accesos o hacia el mundo exterior.

### 3. Prohibición de Dropeo y Tecla Offhand (`F`)
* La tecla de soltar ítems (`Q`) está interceptada y cancelada en `PlayerDropItemEvent`.
* La tecla de cambio de mano secundaria (`F`) está interceptada en `PlayerSwapHandItemsEvent`. Los gadgets permanecen siempre fijos en la mano principal.

### 4. Protección contra Soportes de Armadura y Entidades
* Interceptado en `PlayerArmorStandManipulateEvent`: es imposible equipar las herramientas de staff a soportes de armadura.
* Interceptado en `PlayerInteractEntityEvent`: se impide colocar ítems en marcos invisibles o comerciar con aldeanos mientras se está en servicio.

### 5. Recogida de Suelo Deshabilitada (`EntityPickupItemEvent`)
* Mientras un moderador esté en Modo Staff o con Vanish activado, no absorberá ningún objeto caído del suelo, evitando limpiar accidentalmente zonas de muerte o botines de jugadores.

---

## 📦 Cofres Silenciosos (Silent Chests)
Cuando un moderador en Modo Staff abre un cofre o contenedor:
* No se reproduce la animación de apertura para los jugadores cercanos.
* No se emite el sonido de cofre.
* El staff ve una vista virtual protegida: no se pueden ingresar objetos de staff dentro del cofre.

