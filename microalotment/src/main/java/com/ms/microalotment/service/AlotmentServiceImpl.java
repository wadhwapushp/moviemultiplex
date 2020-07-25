package com.ms.microalotment.service;

import org.springframework.stereotype.Service;

import com.ms.microalotment.dao.AlotmentRepository;
import com.ms.microalotment.document.AlotmentDetail;
import com.ms.microalotment.dto.AlotmentDetailDto;

@Service
public class AlotmentServiceImpl implements AlotmentService {

	private AlotmentRepository repository;
	
	public AlotmentServiceImpl(AlotmentRepository repository) {
		this.repository = repository;
	}
	
	@Override
	public boolean checkAlreadyInUse(String alotmentId) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public AlotmentDetailDto getAlotmentDetail(String alotmentId) {
		AlotmentDetail alotmentDetail =  this.repository.findById(alotmentId).orElse(null);

		if(alotmentDetail != null) {
			AlotmentDetailDto alotmentDetailDto = new AlotmentDetailDto(alotmentDetail.getId(), 
										alotmentDetail.getMovieId(), 
										alotmentDetail.getMultiplexId(), alotmentDetail.getScreenNumber());
			return alotmentDetailDto;
		}
		return null;
		
	}

	@Override
	public AlotmentDetailDto add(AlotmentDetailDto alotmentDetailDto) {
		// convert Dto -> Document
		AlotmentDetail alotmentDetail = new AlotmentDetail(
				null, 
				alotmentDetailDto.getMovieId(), 
				alotmentDetailDto.getMultiplexId(), alotmentDetailDto.getScreenNumber()
				);
		alotmentDetail =this.repository.save(alotmentDetail);
		AlotmentDetailDto alotmentDetailDto1 = new AlotmentDetailDto (
				alotmentDetail.getId(), 
				alotmentDetail.getMovieId(), 
				alotmentDetail.getMultiplexId(), alotmentDetail.getScreenNumber()
				);
		
		return alotmentDetailDto1;
	}

	@Override
	public Boolean deleteAlotmentDetail(String id) {
		this.repository.deleteById(id);
		return true;
	}

	@Override
	public Iterable<AlotmentDetail> getAllAlotmentList() {
		Iterable<AlotmentDetail> alotmentDetailList =  this.repository.findAll();
		return alotmentDetailList;
	}

	@Override
	public AlotmentDetailDto update(AlotmentDetailDto alotmentDetailDto) {
		// convert Dto -> Document
		AlotmentDetail alotmentDetail = new AlotmentDetail(
				alotmentDetailDto.getId(),alotmentDetailDto.getMovieId(), 
				alotmentDetailDto.getMultiplexId(), alotmentDetailDto.getScreenNumber()
				);
		alotmentDetail =this.repository.save(alotmentDetail);
		AlotmentDetailDto alotmentDetailDto1 = new AlotmentDetailDto (
				alotmentDetail.getId(), 
				alotmentDetail.getMovieId(), 
				alotmentDetail.getMultiplexId(), alotmentDetail.getScreenNumber()
				);
		
		return alotmentDetailDto1;
	}

}
