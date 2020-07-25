package com.lti.training.micromultiplex.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.lti.training.micromultiplex.document.MultiplexDetail;

// 1. Document/Entity/Table
// 2. Datatype of PK
@Repository
public interface MultiplexDetailRepository extends CrudRepository<MultiplexDetail, String>{
	
}
