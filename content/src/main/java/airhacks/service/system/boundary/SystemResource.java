package airhacks.service.system.boundary;

import java.security.PublicKey;
import java.util.Map;

import javax.annotation.security.RolesAllowed;
import javax.enterprise.context.RequestScoped;
import javax.json.JsonObject;
import javax.json.bind.JsonbBuilder;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@RequestScoped
@Path("system")
public class SystemResource{

    @GET
    //@RolesAllowed({ "admin" })
    @Produces(MediaType.APPLICATION_JSON)
    public String getEnvironment(){
        return JsonbBuilder.create().toJson(System.getenv(), Map.class);
    }
}