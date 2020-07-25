package com.ms.microalotment.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.ms.microalotment.document.AlotmentDetail;

// 1. Document/Entity/Table
// 2. Datatype of PK
@Repository
public interface AlotmentRepository extends CrudRepository<AlotmentDetail, String>{
	
}
