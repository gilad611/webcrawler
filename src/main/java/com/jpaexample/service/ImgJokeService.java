package com.jpaexample.service;

import java.io.IOException;
import java.util.List;

import com.jpaexample.model.ImgJoke;
import com.jpaexample.model.Joke;

public interface ImgJokeService {

	public List<ImgJoke> findByIdGreaterThan(double id);
	public List<ImgJoke> findByGenre(String genre);
	public List<ImgJoke> findByTitle(String title);
	public List<ImgJoke> findByRating(int rating);
	public ImgJoke       addJoke(ImgJoke jk);
	public ImgJoke       updateJoke(ImgJoke jk);
	public void       	 removeJoke(ImgJoke jk);
	public void			 saveImage(String imageUrl, String destinationFile) throws IOException;
}
