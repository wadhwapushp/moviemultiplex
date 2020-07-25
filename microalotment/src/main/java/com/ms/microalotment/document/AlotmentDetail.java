package com.ms.microalotment.document;

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
public class AlotmentDetail {
	
	@Id
	private String id;
	private String movieId ;
	private String multiplexId ;
	private String screenNumber ;

}
