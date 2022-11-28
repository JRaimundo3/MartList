package srv.data.products;

import java.util.Arrays;
import java.util.UUID;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

/**
 * Represents an Auction, as returned to the clients
 */
public class Product {
	private String id;
	private String title; 
	private String description;
	private String category; 
	private int price;
	private String email;
	private	int phone;
	private String userId;
	private String photoId = null;

	public Product(){

	}

	public Product(String id, String title, String description, String category, int price, String email, int phone, String userId, String photoId) {
		super();
		this.id = id;
		this.title = title; 
		this.description = description;
		this.category = category; 
		this.price = price;
		this.email = email;;
		this.phone = phone;
		this.userId = userId;
		if(photoId!=null)
			this.photoId = photoId;
	}
	public Product(ProductDAO productDAO) {
		super();
		this.id = productDAO.getId();
		this.title = productDAO.getTitle(); 
		this.description = productDAO.getDescription();
		this.category = productDAO.getCategory(); 
		this.price = productDAO.getPrice();
		this.email = productDAO.getEmail();
		this.phone = productDAO.getPhone();
		this.userId = productDAO.getUserId();
		if(photoId!=null)
			this.photoId = productDAO.getPhotoId();
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
