package com.ms.microalotment.service;

import com.ms.microalotment.document.AlotmentDetail;
import com.ms.microalotment.dto.AlotmentDetailDto;

public interface AlotmentService {
	public AlotmentDetailDto add(AlotmentDetailDto musicDetailDto);
	public AlotmentDetailDto update(AlotmentDetailDto musicDetailDto);
	public boolean checkAlreadyInUse(String id);
	public AlotmentDetailDto getAlotmentDetail(String id);
	public Boolean deleteAlotmentDetail(String id);
	public Iterable<AlotmentDetail> getAllAlotmentList();
	
}
