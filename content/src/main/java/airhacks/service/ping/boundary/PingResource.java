package airhacks.service.ping.boundary;

import javax.annotation.security.RolesAllowed;
import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import org.eclipse.microprofile.config.inject.ConfigProperty;

/**
 *
 * @author airhacks.com
 */
@RequestScoped
//@RolesAllowed("user")
@Path("ping")
public class PingResource {

    @Inject
    @ConfigProperty(name = "message")
    String message;    

    @GET
    public String ping() {
        return this.message + " Jakarta EE 8 with MicroProfile 3+!";
    }

}
