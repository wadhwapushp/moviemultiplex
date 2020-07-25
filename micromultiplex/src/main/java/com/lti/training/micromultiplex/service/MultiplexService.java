package com.lti.training.micromultiplex.service;

import javax.validation.Valid;

import com.lti.training.micromultiplex.document.MultiplexDetail;
import com.lti.training.micromultiplex.dto.MultiplexDetailDto;

public interface MultiplexService {
	public boolean checkAlreadyInUse(String multiplex);
	public MultiplexDetailDto getMultiplexDetail(String multiplexId);
	public MultiplexDetailDto addMultiplex(@Valid MultiplexDetailDto multiplexDto);
	public Boolean deleteMultiplexDetail(String multiplexId);
	public MultiplexDetailDto updateMultiplex(@Valid MultiplexDetailDto multiplexDto);
	public Iterable<MultiplexDetail> getAllMultiplex();
	
}
