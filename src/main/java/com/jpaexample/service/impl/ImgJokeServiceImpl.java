package com.jpaexample.service.impl;

import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.URL;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jpaexample.dao.ImgJokeReporistory;
import com.jpaexample.dao.JokeReporistory;
import com.jpaexample.model.ImgJoke;
import com.jpaexample.model.Joke;
import com.jpaexample.service.ImgJokeService;
import com.jpaexample.service.JokeService;

@Service
public class ImgJokeServiceImpl implements ImgJokeService{
public ImgJokeServiceImpl(){
	System.out.println("ImgJokeServiceIpml");
}
   @Autowired
    private ImgJokeReporistory imgJokeReporistory;

   @Override
	public List<ImgJoke> findByIdGreaterThan(double id) {
		return imgJokeReporistory.findByIdGreaterThan(id);
	}
   
	@Override
	public List<ImgJoke> findByGenre(String genre) {
		return imgJokeReporistory.findByGenre(genre);
	}
	@Override
	public List<ImgJoke> findByTitle(String title) {
		return imgJokeReporistory.findByTitle(title);
	}
	@Override
	public List<ImgJoke> findByRating(int rating) {
		return imgJokeReporistory.findByRating(rating);
	}
	@Override
	public ImgJoke addJoke(ImgJoke jk) {
		return imgJokeReporistory.save(jk);
	}
	@Override
	public ImgJoke updateJoke(ImgJoke jk) {
		return imgJokeReporistory.save(jk);
	}
	@Override
	public void removeJoke(ImgJoke jk) {
		imgJokeReporistory.delete(jk);
	}
	@Override
	public void saveImage(String imageUrl, String destinationFile) throws IOException{
		URL url = new URL(imageUrl);
		InputStream is = url.openStream();
		OutputStream os = new FileOutputStream(destinationFile);
	
		byte[] b = new byte[2048];
		int length;
	
		while ((length = is.read(b)) != -1) {
			os.write(b, 0, length);
		}
	
		is.close();
		os.close();
	}
}
