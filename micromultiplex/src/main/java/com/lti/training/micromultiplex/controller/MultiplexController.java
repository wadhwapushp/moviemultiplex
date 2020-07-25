package com.lti.training.micromultiplex.controller;

import javax.validation.Valid;
import javax.ws.rs.Consumes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lti.training.micromultiplex.document.MultiplexDetail;
import com.lti.training.micromultiplex.dto.MultiplexDetailDto;
import com.lti.training.micromultiplex.dto.MultiplexExceptionDto;
import com.lti.training.micromultiplex.exception.BoundaryException;
import com.lti.training.micromultiplex.service.MultiplexService;

@RestController
@RequestMapping("/api/multiplex")
public class MultiplexController {
	
	private MultiplexService multiplexService;
	
	@Autowired
	public MultiplexController(MultiplexService multiplexService) {
		this.multiplexService = multiplexService;
	}

	@GetMapping("/{multiplexId}")
	public ResponseEntity<MultiplexDetailDto> getMultiplexDetail(@PathVariable("multiplexId") String multiplexId){
		MultiplexDetailDto multiplexDetailDto =  this.multiplexService.getMultiplexDetail(multiplexId);
		
		return new ResponseEntity<>(multiplexDetailDto,HttpStatus.OK);
	}
	
	@GetMapping
	public ResponseEntity <Iterable<MultiplexDetail>>  getAllMultiplex(){
		Iterable <MultiplexDetail> multiplexLST  =  this.multiplexService.getAllMultiplex();
		
		return new ResponseEntity<>(multiplexLST,HttpStatus.OK);
	}
	
	@PostMapping
	@Consumes(MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<MultiplexDetailDto> addMultiplex(@Valid @RequestBody MultiplexDetailDto multiplexDto
												, BindingResult result){
		
		if(result.hasErrors()) {
			throw new BoundaryException("Multiplex not in correct format!!!");
		}
		MultiplexDetailDto multiplexDetailDto =  this.multiplexService.addMultiplex(multiplexDto);
		return new ResponseEntity<>(multiplexDetailDto,HttpStatus.OK);
	}
	
   @PutMapping
   @Consumes(MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<MultiplexDetailDto> updateMultiplex(@Valid @RequestBody MultiplexDetailDto multiplexDto
												, BindingResult result){
		
		if(result.hasErrors()) {
			throw new BoundaryException("Multiplex update not in correct format!!!");
		}
		MultiplexDetailDto multiplexDetailDto =  this.multiplexService.updateMultiplex(multiplexDto);
		
		
		ResponseEntity<MultiplexDetailDto> response = 
				new ResponseEntity<MultiplexDetailDto>(multiplexDetailDto,HttpStatus.OK);
		return response;
	}
	
   @DeleteMapping("/{multiplexId}")
	public ResponseEntity<Boolean> deleteMultiplexDetail(@PathVariable("multiplexId") String multiplexId){
	   Boolean success =  this.multiplexService.deleteMultiplexDetail(multiplexId);
		// manage Multiplex not found exception
		return new ResponseEntity<>(success,HttpStatus.OK);
	}
	
	@ExceptionHandler(BoundaryException.class)
	public ResponseEntity<MultiplexExceptionDto> boundaryExceptionHanler(BoundaryException ex) {
		MultiplexExceptionDto multiplexExceptionDto = 
				new MultiplexExceptionDto(ex.getMessage(), 
									HttpStatus.BAD_REQUEST.value(), 
									System.currentTimeMillis());
				
		return new ResponseEntity<>(multiplexExceptionDto, HttpStatus.BAD_REQUEST);
	}
}













