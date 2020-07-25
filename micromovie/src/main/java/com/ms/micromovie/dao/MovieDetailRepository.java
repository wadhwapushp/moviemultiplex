package com.ms.micromovie.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.ms.micromovie.document.MovieDetail;

// 1. Document/Entity/Table
// 2. Datatype of PK
@Repository
public interface MovieDetailRepository extends CrudRepository<MovieDetail, String>{
	Optional<MovieDetail> findById(String id);
}
