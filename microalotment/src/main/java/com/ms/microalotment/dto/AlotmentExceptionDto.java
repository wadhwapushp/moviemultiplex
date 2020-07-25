package com.ms.microalotment.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class AlotmentExceptionDto {

	private String message;
	private Integer errorCode;
	private Long timeStamp;
}
