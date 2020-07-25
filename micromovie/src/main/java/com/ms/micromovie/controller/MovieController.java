package com.ms.micromovie.controller;

import javax.ws.rs.Produces;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ms.micromovie.document.MovieDetail;
import com.ms.micromovie.dto.MovieDetailDto;
import com.ms.micromovie.dto.MovieExceptionDto;
import com.ms.micromovie.exception.BoundaryException;
import com.ms.micromovie.service.MovieService;
import org.springframework.http.MediaType;

@RestController
@RequestMapping("/api/movie")
public class MovieController {
	
	private MovieService movieService;
	
	@Autowired
	public MovieController(MovieService movieService) {
		this.movieService = movieService;
	}

	@PostMapping
	// recieve DTO (add)
	// return DTO (Movie details)
	public ResponseEntity<MovieDetailDto> addMovie(@RequestBody MovieDetailDto movieDetailDto) {
		return new ResponseEntity<>(this.movieService.add(movieDetailDto),HttpStatus.OK);
	}
	
	@PutMapping
	// recieve DTO (update)
	// return DTO (Movie details)
	public ResponseEntity<MovieDetailDto> updateMovie(@RequestBody MovieDetailDto MovieDetailDto) {
		return new ResponseEntity<>( this.movieService.update(MovieDetailDto),HttpStatus.OK);
	}
	
	@GetMapping("/{movieId}")
	public ResponseEntity<MovieDetailDto> getMovieDetail(@PathVariable("movieId") String movieId){
		return new ResponseEntity<>(this.movieService.getMovieDetail(movieId),HttpStatus.OK);
	}
	
	@GetMapping("/all")
	@Produces(MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity <Iterable<MovieDetail>> getAllMovieList(){
			
		return new ResponseEntity<>(this.movieService.getAllMovieList(),HttpStatus.OK);
	}
	
	@DeleteMapping("/{movieId}")
	public ResponseEntity<Boolean> deleteMovieDetail(@PathVariable("movieId") String MovieId){
						
		return new ResponseEntity<>(this.movieService.deleteMovieDetail(MovieId),HttpStatus.OK);
	}
	
	@GetMapping("/search")
	public ResponseEntity <Iterable<MovieDetail>> searchMovieList(){
		
		//Todo add The Search Critaria 
			return new ResponseEntity<>(this.movieService.getAllMovieList(),HttpStatus.OK);
	}
	
	
	@ExceptionHandler(BoundaryException.class)
	public ResponseEntity<MovieExceptionDto> boundaryExceptionHanler(BoundaryException ex) {
		MovieExceptionDto MovieExceptionDto = 
				new MovieExceptionDto(ex.getMessage(), 
									HttpStatus.BAD_REQUEST.value(), 
									System.currentTimeMillis());		
		return new ResponseEntity<>(MovieExceptionDto, HttpStatus.BAD_REQUEST); 
	}
}