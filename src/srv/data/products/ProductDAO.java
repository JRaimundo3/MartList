package srv.data.products;

import java.util.Arrays;
import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

/**
 * Represents an Auction, as returned to the clients
 */
public class ProductDAO {
	private String _rid;
	private String _ts;
	private String id;
	private String title; 
	private String description;
	private String category; 
	private int price;
	private String email;
	private	int phone;
	private String userId;
	private String photoId;
	

	public ProductDAO() {
	}

	public ProductDAO( Product a) {
		this(a.getId(), a.getTitle(), a.getDescription(), a.getCategory(), a.getPrice(), a.getEmail(), a.getPhone(), a.getUserId(), a.getPhotoId());
	}

	public ProductDAO(String id, String title, String description, String category, int price, String email, int phone, String userId, String photoId) {
		super();
		this.id = id;
		this.title = title; 
		this.description = description;
		this.category = category; 
		this.price = price;
		this.email = email;;
		this.phone = phone;
		this.userId = userId;
		this.photoId = photoId;
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

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}


	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getPhotoId() {
		return photoId;
	}

	public void setPhotoId(String photoId) {
		this.photoId = photoId;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}
	
	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public int getPhone() {
		return phone;
	}

	public void setPhone(int phone) {
		this.phone = phone;
	}
	
	@Override
	public String toString() {
		return "Product [id=" + id + ", title=" + title + ", description=" + description + ", userId=" +userId + ", photoId=" + photoId +
		"price=" + price + ", email=" + email + ", phone=" +  phone + ", category=" + category + "]";
	}

}
