package com.lti.training.micromultiplex.document;

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
public class MultiplexDetail {
	
	@Id
	private String id;
	private String	multiplexName ;
	private String	address ;
	private String	numberOfScreens ;

	// private String profilePic;
	
}
