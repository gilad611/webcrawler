package com.jpaexample.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jpaexample.dao.JokeReporistory;
import com.jpaexample.model.Joke;
import com.jpaexample.service.JokeService;

@Service
public class JokeServiceImpl implements JokeService{
public JokeServiceImpl(){
	System.out.println("JokeServiceIpml");
}
   @Autowired
    private JokeReporistory jokeReporistory;

   @Override
	public List<Joke> findByIdGreaterThan(double id) {
		return jokeReporistory.findByIdGreaterThan(id);
	}
   
	@Override
	public List<Joke> findByGenre(String genre) {
		return jokeReporistory.findByGenre(genre);
	}
	@Override
	public List<Joke> findByTitle(String title) {
		return jokeReporistory.findByTitle(title);
	}
	@Override
	public List<Joke> findByRating(int rating) {
		return jokeReporistory.findByRating(rating);
	}
	@Override
	public Joke addJoke(Joke jk) {
		return jokeReporistory.save(jk);
	}
	@Override
	public Joke updateJoke(Joke jk) {
		return jokeReporistory.save(jk);
	}
	@Override
	public void removeJoke(Joke jk) {
		jokeReporistory.delete(jk);
		
	}
}
