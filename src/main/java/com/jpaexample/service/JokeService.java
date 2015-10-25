package com.jpaexample.service;

import java.util.List;

import com.jpaexample.model.Joke;

public interface JokeService {

	public List<Joke> findByIdGreaterThan(double id);
	public List<Joke> findByGenre(String genre);
	public List<Joke> findByTitle(String title);
	public List<Joke> findByRating(int rating);
	public Joke       addJoke(Joke jk);
	public Joke       updateJoke(Joke jk);
	public void       removeJoke(Joke jk);
}
