# Eventos Personalizados

StaffPlus dispara eventos a través del gestor de eventos de Bukkit para que otros plugins puedan reaccionar a acciones de moderación.

---

## 📢 Evento: `ReportPlayerEvent`

Se ejecuta en el momento en que un usuario utiliza `/report` para denunciar a otro jugador.

```java
package mi.plugin.listeners;

import net.shortninja.staffplus.event.ReportPlayerEvent;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;

public class ModeracionListener implements Listener {

    @EventHandler
    public void onReport(ReportPlayerEvent event) {
        String denunciante = event.getSender().getName();
        String sospechoso = event.getReported().getName();
        String motivo = event.getReason();

        // Enviar por ejemplo una notificación a un webhook de Discord
        System.out.println("[Discord Webhook] Nuevo reporte: " + denunciante + " reportó a " + sospechoso + " por: " + motivo);
    }
}
```

::: tip Cancelación de Eventos
Si un evento implementa `Cancellable`, puedes llamar a `event.setCancelled(true)` para detener la acción antes de que se procese en StaffPlus.
:::

