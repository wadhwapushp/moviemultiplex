package com.ms.microalotment.controller;

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

import com.ms.microalotment.document.AlotmentDetail;
import com.ms.microalotment.dto.AlotmentDetailDto;
import com.ms.microalotment.dto.AlotmentExceptionDto;
import com.ms.microalotment.exception.BoundaryException;
import com.ms.microalotment.service.AlotmentService;

@RestController
@RequestMapping("/api/alotment")
public class AllotmentController {
	
	private AlotmentService alotmentService;
	
	@Autowired
	public AllotmentController(AlotmentService alotmentService) {
		this.alotmentService = alotmentService;
	}

	@PostMapping("/add")
	// recieve DTO (add)
	// return DTO (alotment details)
	public ResponseEntity<AlotmentDetailDto> addalotment(@RequestBody AlotmentDetailDto alotmentDetailDto) {
		AlotmentDetailDto alotmentDetailresponse = this.alotmentService.add(alotmentDetailDto);			
		return new ResponseEntity<>(alotmentDetailresponse,HttpStatus.OK);
	}
	
	@PutMapping("/update")
	// recieve DTO (update)
	// return DTO (alotment details)
	public ResponseEntity<AlotmentDetailDto> updatealotment(@RequestBody AlotmentDetailDto alotmentDetailDto) {
		AlotmentDetailDto alotmentDetailresponse = this.alotmentService.update(alotmentDetailDto);			
		return new ResponseEntity<>(alotmentDetailresponse,HttpStatus.OK);
	}
	
	@GetMapping("/{alotmentId}")
	public ResponseEntity<AlotmentDetailDto> getalotmentDetail(@PathVariable("alotmentId") String alotmentId){
		AlotmentDetailDto alotmentDetailDto =  this.alotmentService.getAlotmentDetail(alotmentId);

		return new ResponseEntity<>(alotmentDetailDto,HttpStatus.OK);
	}
	
	@GetMapping("/all")
	public ResponseEntity <Iterable<AlotmentDetail>> getAllalotmentList(){
		Iterable<AlotmentDetail> alotmentLST =  this.alotmentService.getAllAlotmentList();
		// manage alotment not found exception
				
		return new ResponseEntity<>(alotmentLST,HttpStatus.OK);
	}
	
	@DeleteMapping("/{alotmentId}")
	public ResponseEntity<Boolean> deletealotmentDetail(@PathVariable("alotmentId") String alotmentId){
						
		return new ResponseEntity<>(this.alotmentService.deleteAlotmentDetail(alotmentId),HttpStatus.OK);
	}
	
	@GetMapping("/search")
	public ResponseEntity <Iterable<AlotmentDetail>> searchalotmentList(){
		
		//Todo add The Search Critaria 
		
		Iterable<AlotmentDetail> alotmentLST =  this.alotmentService.getAllAlotmentList();
		// manage alotment not found exception
				
		return new ResponseEntity<>(alotmentLST,HttpStatus.OK);
	}
	
	
	@ExceptionHandler(BoundaryException.class)
	public ResponseEntity<AlotmentExceptionDto> boundaryExceptionHanler(BoundaryException ex) {
		AlotmentExceptionDto alotmentExceptionDto = 
				new AlotmentExceptionDto(ex.getMessage(), 
									HttpStatus.BAD_REQUEST.value(), 
									System.currentTimeMillis());		
		return new ResponseEntity<>(alotmentExceptionDto, HttpStatus.BAD_REQUEST); 
	}
}