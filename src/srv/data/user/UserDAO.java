package srv.data.user;

import java.util.Arrays;

/**
 * Represents a User, as stored in the database
 */
public class UserDAO {
	private String _rid;
	private String _ts;
	private String id;
	private String pwd;


	public UserDAO() {
	}
	public UserDAO( User u) {
		this(u.getId(), u.getPwd());
	}

	public UserDAO(String id, String pwd) {
		super();
		this.id = id;
		this.pwd = pwd;
	}
	public String get_rid() {
		return _rid;
	}
	public void set_rid(String _rid) {
		this._rid = _rid;
	}
	public String get_ts() {
		return _ts;
	}
	public void set_ts(String _ts) {
		this._ts = _ts;
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

	public User toUser() {
		return new User( id, pwd);
	}
	@Override
	public String toString() {
		return "UserDAO [_rid=" + _rid + ", _ts=" + _ts + ", id=" + id + ", pwd=" + pwd + "]";
	}

}
