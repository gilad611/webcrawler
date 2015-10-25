package com.jpaexample.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jpaexample.model.ImgJoke;
import com.jpaexample.model.Joke;

public interface ImgJokeReporistory extends JpaRepository<ImgJoke, String> {

	public List<ImgJoke> findByIdGreaterThan(double id);
	public List<ImgJoke> findByGenre(String genre);
	public List<ImgJoke> findByTitle(String title);
	public List<ImgJoke> findByRating(int rating);
}