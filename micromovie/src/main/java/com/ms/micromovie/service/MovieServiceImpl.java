package com.ms.micromovie.service;

import org.springframework.stereotype.Service;

import com.ms.micromovie.dao.MovieDetailRepository;
import com.ms.micromovie.document.MovieDetail;
import com.ms.micromovie.dto.MovieDetailDto;

@Service
public class MovieServiceImpl implements MovieService {

	private MovieDetailRepository repository;
	
	public MovieServiceImpl(MovieDetailRepository repository) {
		this.repository = repository;
	}
	
	@Override
	public boolean checkAlreadyInUse(String movieId) {
		return false;
	}

	@Override
	public MovieDetailDto getMovieDetail(String movieId) {
		MovieDetail movieDetail =  this.repository.findById(movieId).orElse(null);

		if(movieDetail != null) {
			return new MovieDetailDto(movieDetail.getId(), 
					movieDetail.getName(), 
					movieDetail.getProducer(), movieDetail.getCategory(),
					movieDetail.getDirector(),movieDetail.getReleaseDate());
		}
		return null;
		
	}

	@Override
	public MovieDetailDto add(MovieDetailDto movieDetailDto) {
		// convert Dto -> Document
		MovieDetail movieDetail = new MovieDetail(
				null,movieDetailDto.getName(),movieDetailDto.getCategory(),
				movieDetailDto.getProducer(), movieDetailDto.getDirector() ,
				movieDetailDto.getReleaseDate()
				);
		movieDetail =this.repository.save(movieDetail);
		MovieDetailDto movieDetailDto1 = new MovieDetailDto (
				movieDetail.getId(),
				movieDetail.getName(),
				movieDetail.getCategory(),
				movieDetail.getDirector(),
				movieDetail.getProducer(),
				movieDetail.getReleaseDate()
				);
		
		return movieDetailDto1;
	}

	@Override
	public Boolean deleteMovieDetail(String id) {
		this.repository.deleteById(id);
		return true;
	}

	@Override
	public Iterable<MovieDetail> getAllMovieList() {
		Iterable<MovieDetail> movieDetailList =  this.repository.findAll();
	
//		if(movieDetailList != null) {
//
//			MovieDetailDto movieDetailDto = new MovieDetailDto(movieDetail.getId(), 
//										movieDetail.getName(), 
//										movieDetail.getProducer(), movieDetail.getCategory(),
//										movieDetail.getDirector(),movieDetail.getReleaseDate());
//			return movieDetailList;
//		}
		
		return movieDetailList;
	}

	@Override
	public MovieDetailDto update(MovieDetailDto movieDetailDto) {
		// convert Dto -> Document
		MovieDetail movieDetail = new MovieDetail(
				movieDetailDto.getId(),movieDetailDto.getName(),movieDetailDto.getCategory(),
				movieDetailDto.getProducer(), movieDetailDto.getDirector() ,
				movieDetailDto.getReleaseDate()
				);
		movieDetail =this.repository.save(movieDetail);
		MovieDetailDto movieDetailDto1 = new MovieDetailDto (
				movieDetail.getId(),
				movieDetail.getName(),
				movieDetail.getCategory(),
				movieDetail.getDirector(),
				movieDetail.getProducer(),
				movieDetail.getReleaseDate()
				);
		
		return movieDetailDto1;
	}

}
