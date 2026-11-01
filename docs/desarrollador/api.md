# StaffPlus API

Si eres desarrollador de plugins para Minecraft, puedes integrar **StaffPlus** en tus propios proyectos para verificar el estado de los moderadores, comprobar sanciones o escuchar eventos.

---

## 📦 Dependencia Maven

Para utilizar la API en tu proyecto con Maven, añade el módulo a tu `pom.xml`:

```xml
<dependency>
    <groupId>net.shortninja.staffplus</groupId>
    <artifactId>StaffPlusAPI</artifactId>
    <version>5.0.4</version>
    <scope>provided</scope>
</dependency>
```

---

## 💻 Obtener la Instancia de la API

Puedes obtener la instancia mediante el `ServicesManager` de Bukkit o consultando directamente el plugin principal:

```java
import net.shortninja.staffplus.IStaffPlus;
import org.bukkit.Bukkit;
import org.bukkit.plugin.RegisteredServiceProvider;

RegisteredServiceProvider<IStaffPlus> provider = Bukkit.getServicesManager().getRegistration(IStaffPlus.class);
if (provider != null) {
    IStaffPlus staffPlus = provider.getProvider();
}
```

---

## 🔍 Consultar el Estado de un Usuario (`IUser`)

```java
import net.shortninja.staffplus.IStaffPlus;
import net.shortninja.staffplus.unordered.IUser;
import org.bukkit.entity.Player;

public boolean isPlayerVanished(Player player, IStaffPlus api) {
    IUser user = api.getUserManager().get(player.getUniqueId());
    return user != null && user.isVanished();
}

public boolean isPlayerFrozen(Player player, IStaffPlus api) {
    IUser user = api.getUserManager().get(player.getUniqueId());
    return user != null && user.isFrozen();
}
```

