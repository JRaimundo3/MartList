package srv.api.service.rest;

import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.time.temporal.ChronoUnit;
import java.util.*;

import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.Response.Status;

import com.azure.cosmos.CosmosException;
import com.azure.cosmos.util.CosmosPagedIterable;

import jakarta.ws.rs.*;
import jakarta.ws.rs.core.Cookie;
import jakarta.ws.rs.core.MediaType;

import srv.data.user.User;
import srv.data.user.UserDAO;
import srv.layers.BlobStorageLayer;
import srv.layers.CosmosDBLayer;
import srv.data.products.Product;
import srv.data.products.ProductDAO;

import srv.api.service.rest.authentication.AuthenticationResource;

@Path("/products")
public class ProductsResource {
    private BlobStorageLayer blob = BlobStorageLayer.getInstance(false);
    private CosmosDBLayer db = CosmosDBLayer.getInstance();

    private AuthenticationResource auth = new AuthenticationResource();



/*    public static final String ABOUT_TO_CLOSE_AUCTIONS = "AboutToCloseAuctions";
    public static final String AUCTIONS_FROM = "AuctionsFrom";
    public static final String AUCTION_BIDS = "AuctionBids";
    public static final String AUCTION_QUESTIONS = "AuctionQuestions";*/

    /*
     * public static final String ABOUT_TO_CLOSE_AUCTIONS = "AboutToCloseAuctions";
     * public static final String AUCTIONS_FROM = "AuctionsFrom";
     * public static final String AUCTION_BIDS = "AuctionBids";
     * public static final String AUCTION_QUESTIONS = "AuctionQuestions";
     */

    /*
     * NOTE: make sure that it is easy to turn off the advanced features, so that
     * you can
     * execute tests that compare both – suggestion: have flags that control access
     * to the
     * additional code needed for the advanced feature. THAT'S WHY CREATED FLAG
     * cacheIsActive
     */
    private boolean cacheIsActive = true;
    private boolean autheticationIsActive = false;

    /**
     * Post a new auction.
     */
    @POST
    @Path("/")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Product createProduct(Product product) {

        try {

            String id = product.getId();

            User u = null;
            UserDAO userDAO = null;
            if (u == null) {
                userDAO = db.getById(product.getUserId(), CosmosDBLayer.USERS, UserDAO.class);
            }
            if (u == null && userDAO == null) {
                throw new WebApplicationException(Status.NOT_FOUND);
            }

            try {
                // Adds auction to database
                db.put(CosmosDBLayer.PRODUCTS, new ProductDAO(product));

            } catch (CosmosException e) {
                throw new WebApplicationException(e.getStatusCode());
            }

            return product;
        } catch (NotAuthorizedException e) {
            throw new NotAuthorizedException("Invalid user : " + product.getUserId());
        }
    }

    @GET
    @Path("/")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Product> listProducts() {
        CosmosPagedIterable<ProductDAO> products = db.getList(CosmosDBLayer.PRODUCTS, ProductDAO.class);
        List<Product> l = new ArrayList<>();
        for (ProductDAO o : products) {
            l.add(new Product(o));
        }

        return l;
    }

    @GET
    @Path("/{USER_ID}")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Product> listProductsByUser(@PathParam("USER_ID") String userId) {
        CosmosPagedIterable<ProductDAO> products = db.getList(CosmosDBLayer.PRODUCTS, ProductDAO.class);
        List<Product> l = new ArrayList<>();
        for (ProductDAO o : products) {
            if(o.getUserId().equals(userId))
                l.add(new Product(o));
        }

        return l;
    }

    @GET
    @Path("/category/{CATEGORY}")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Product> listProductsByCategory(@PathParam("CATEGORY") String category) {
        CosmosPagedIterable<ProductDAO> products = db.getList(CosmosDBLayer.PRODUCTS, ProductDAO.class);
        List<Product> l = new ArrayList<>();
        for (ProductDAO o : products) {
            if(o.getCategory().equals(category))
                l.add(new Product(o));
        }

        return l;
    }

}
