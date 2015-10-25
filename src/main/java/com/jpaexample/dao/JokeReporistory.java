package com.jpaexample.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jpaexample.model.Joke;

public interface JokeReporistory extends JpaRepository<Joke, String> {

	public List<Joke> findByIdGreaterThan(double id);
	public List<Joke> findByGenre(String genre);
	public List<Joke> findByTitle(String title);
	public List<Joke> findByRating(int rating);
}