package com.ms.microalotment.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class AlotmentDetailDto {
	private String id;
	private String movieId ;
	private String multiplexId ;
	private String screenNumber ;
//	private String director ;
//	private String releaseDate ;
}
