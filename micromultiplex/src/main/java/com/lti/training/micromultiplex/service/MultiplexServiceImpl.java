package com.lti.training.micromultiplex.service;

import javax.validation.Valid;

import org.springframework.stereotype.Service;

import com.lti.training.micromultiplex.dao.MultiplexDetailRepository;
import com.lti.training.micromultiplex.document.MultiplexDetail;
import com.lti.training.micromultiplex.dto.MultiplexDetailDto;

@Service
public class MultiplexServiceImpl implements MultiplexService {

	private MultiplexDetailRepository repository;
	
	public MultiplexServiceImpl(MultiplexDetailRepository repository) {
		this.repository = repository;
	}

	@Override
	public boolean checkAlreadyInUse(String screenMultiplexId) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public MultiplexDetailDto getMultiplexDetail(String multiplexId) {
		MultiplexDetail multiplexDetail =  this.repository.findById(multiplexId).orElse(null);
		if(multiplexDetail != null) {
			MultiplexDetailDto multiplexDetailDto = new MultiplexDetailDto(multiplexDetail.getId(), 
										multiplexDetail.getMultiplexName(), 
										multiplexDetail.getAddress(), 
										multiplexDetail.getNumberOfScreens());
			return multiplexDetailDto;
		}
		return null;
		
	}

	@Override
	public MultiplexDetailDto addMultiplex(@Valid MultiplexDetailDto multiplexDto) {
		// convert Dto -> Document
		MultiplexDetail multiplexDetail = new MultiplexDetail(null, 
				multiplexDto.getMultiplexName(), multiplexDto.getAddress() ,
				multiplexDto.getNumberOfScreens());
		
		multiplexDetail = this.repository.save(multiplexDetail);
		// convert Dto -> Document
		MultiplexDetailDto multplexDetailDto = new MultiplexDetailDto(multiplexDetail.getId(), 
														multiplexDetail.getMultiplexName(), 
														multiplexDetail.getAddress(),
														multiplexDetail.getNumberOfScreens()
														);
		return multplexDetailDto;
	}

	@Override
	public Boolean deleteMultiplexDetail(String multiplexId) {
		
		this.repository.deleteById(multiplexId);
		return true;
	}

	@Override
	public MultiplexDetailDto updateMultiplex(@Valid MultiplexDetailDto multiplexDto) {
		// convert Dto -> Document
		MultiplexDetail multiplexDetail = new MultiplexDetail(multiplexDto.getId(), 
				multiplexDto.getMultiplexName(), multiplexDto.getAddress(),
				multiplexDto.getNumberOfScreens());
		
		multiplexDetail = this.repository.save(multiplexDetail);
		// convert Dto -> Document
		MultiplexDetailDto multplexDetailDto1 = new MultiplexDetailDto(multiplexDetail.getId(), 
														multiplexDetail.getMultiplexName(), 
														multiplexDetail.getAddress(),
														multiplexDetail.getNumberOfScreens() 
														);
		return multplexDetailDto1;
	}

	@Override
	public Iterable<MultiplexDetail> getAllMultiplex() {
		return this.repository.findAll();
	}

}
