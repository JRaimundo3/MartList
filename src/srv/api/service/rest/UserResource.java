package srv.api.service.rest;

import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.Response.Status;

import com.azure.cosmos.CosmosException;
import com.azure.cosmos.util.CosmosPagedIterable;

import jakarta.ws.rs.*;
import jakarta.ws.rs.core.Cookie;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.NewCookie;
import jakarta.ws.rs.core.Response;
import srv.api.service.rest.authentication.AuthenticationResource;
import srv.layers.BlobStorageLayer;
import srv.layers.CosmosDBLayer;
import utils.Hash;
import srv.api.service.rest.authentication.Login;
import srv.api.service.rest.authentication.Session;
import srv.data.user.User;
import srv.data.user.UserDAO;
import srv.api.service.rest.authentication.*;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

/*import static srv.api.service.rest.AuctionResource.AUCTIONS_FROM;*/

@Path("/user")
public class UserResource {
    private BlobStorageLayer blob = BlobStorageLayer.getInstance(false);
    private CosmosDBLayer db = CosmosDBLayer.getInstance();

    private AuthenticationResource auth = new AuthenticationResource();

    private boolean autheticationIsActive = false;

    /**
     * Post a new user given its username, name, password and photo.
     */
    @POST
    @Path("/")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public User createUser(User user) {
        String id = user.getId();
        if (id == null)
            throw new WebApplicationException(Status.BAD_REQUEST);

        try {
            
            db.put(CosmosDBLayer.USERS, new UserDAO(user));
        } catch (CosmosException e) {
            throw new WebApplicationException(e.getStatusCode());
        }

        // Adds user to database
        return user;
    }

    @POST
    @Path("/login")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Login login(Login user) {
        String id = user.getId();
        if (id == null)
            throw new WebApplicationException(Status.BAD_REQUEST);

        try {
            
            db.put(CosmosDBLayer.SESSIONS, new LoginDAO(user));
        } catch (CosmosException e) {
            throw new WebApplicationException(e.getStatusCode());
        }
        return user;
    }

    @DELETE
    @Path("/logout/{USER_ID}")
    @Produces(MediaType.APPLICATION_JSON)
    public void endSession(@PathParam("USER_ID") String userId) {

        try {

            LoginDAO user = db.getById(userId, CosmosDBLayer.SESSIONS, LoginDAO.class);
            if (user == null)
                throw new WebApplicationException(Status.NOT_FOUND);

            try {

                db.delById(userId, CosmosDBLayer.SESSIONS);

            } catch (CosmosException e) {
                throw new WebApplicationException(e.getStatusCode());
            }
        } catch (NotAuthorizedException e) {
            throw new NotAuthorizedException("Invalid user : " + userId);
        }
    }


    /**
     * Delete a user given its username and password
     */
    @DELETE
    @Path("/{USER_ID}")
    @Produces(MediaType.APPLICATION_JSON)
    public void deleteUser(@PathParam("USER_ID") String userId) {

        try {

            UserDAO user = db.getById(userId, CosmosDBLayer.USERS, UserDAO.class);
            if (user == null)
                throw new WebApplicationException(Status.NOT_FOUND);

            try {

                db.delById(userId, CosmosDBLayer.USERS);

            } catch (CosmosException e) {
                throw new WebApplicationException(e.getStatusCode());
            }
        } catch (NotAuthorizedException e) {
            throw new NotAuthorizedException("Invalid user : " + userId);
        }
    }

    @GET
    @Path("/")
    @Produces(MediaType.APPLICATION_JSON)
    public List<User> listUsers() {

        CosmosPagedIterable<UserDAO> users = db.getList(CosmosDBLayer.USERS, UserDAO.class);

        List<User> l = new ArrayList<>();
        for (UserDAO o : users) {
            l.add(new User(o));
        }

        return l;
    }

}

