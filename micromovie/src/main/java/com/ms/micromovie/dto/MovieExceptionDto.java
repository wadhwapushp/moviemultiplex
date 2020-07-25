package com.ms.micromovie.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class MovieExceptionDto {

	private String message;
	private Integer errorCode;
	private Long timeStamp;
}
