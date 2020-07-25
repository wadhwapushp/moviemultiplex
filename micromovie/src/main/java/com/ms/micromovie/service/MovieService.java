package com.ms.micromovie.service;

import com.ms.micromovie.document.MovieDetail;
import com.ms.micromovie.dto.MovieDetailDto;

public interface MovieService {
	public MovieDetailDto add(MovieDetailDto movieDetailDto);
	public MovieDetailDto update(MovieDetailDto movieDetailDto);
	public boolean checkAlreadyInUse(String id);
	public MovieDetailDto getMovieDetail(String id);
	public Boolean deleteMovieDetail(String id);
	public Iterable<MovieDetail> getAllMovieList();
	
}
