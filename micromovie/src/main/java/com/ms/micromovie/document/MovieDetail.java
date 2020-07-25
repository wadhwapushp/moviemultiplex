package com.ms.micromovie.document;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

// mapped with mongo db table(document)
@Document
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class MovieDetail {
	
	@Id
	private String id ;
	private String name ;
	private String category ;
	private String producer ;
	private String director ;
	private String releaseDate ;

}
