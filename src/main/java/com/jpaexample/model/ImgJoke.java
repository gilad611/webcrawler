package com.jpaexample.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="IMGJOKES")
public class ImgJoke {

	@Id
//	@GeneratedValue(strategy=GenerationType.AUTO)
    @Column(name="ID")
    private double id;
	@Column(name="TITLE")
	private String title;
	@Column(name="IMGURL")
	private String img;
	@Column(name="GENRE")
	private String genre;
	@Column(name="RATING")
	private int rating;

	public ImgJoke() {
		super();
	}
	public ImgJoke(double id, String title, String img, String genre, int rating) {
		super();
		this.id = id;
		this.title = title;
		this.img = img;
		this.genre = genre;
		this.rating = rating;
	}
	
	public double getId() {
		return id;
	}
	public void setId(double id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getImg() {
		return img;
	}
	public void setImg(String img) {
		this.img = img;
	}
	public String getGenre() {
		return genre;
	}
	public void setGenre(String genre) {
		this.genre = genre;
	}
	public int getRating() {
		return rating;
	}
	public void setRating(int rating) {
		this.rating = rating;
	}
	
	
}
