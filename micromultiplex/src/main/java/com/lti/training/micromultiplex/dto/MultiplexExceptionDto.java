package com.lti.training.micromultiplex.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class MultiplexExceptionDto {

	private String message;
	private Integer errorCode;
	private Long timeStamp;
}
