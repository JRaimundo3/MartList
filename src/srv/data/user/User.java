package srv.data.user;


/**
 * Represents a User, as returned to the clients
 */
public class User {
	private String id;
	private String pwd;

	public User(){
		
	}

	public User(String id, String pwd) {
		super();
		this.id = id; //email
		//this.name = name;
		this.pwd = pwd;

	}
	public User(UserDAO user) {
		super();
		this.id = user.getId();
		this.pwd = user.getPwd();
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getPwd() {
		return pwd;
	}
	public void setPwd(String pwd) {
		this.pwd = pwd;
	}
	@Override
	public String toString() {
		return "User [id=" + id + ", pwd=" + pwd + "]";
	}

}
