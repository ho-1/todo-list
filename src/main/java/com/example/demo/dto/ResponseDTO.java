package com.example.demo.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class ResponseDTO<T> {
	private String error;
	private List<T> data;
}

// TodoDTO 뿐만 아니라 다른 모델의 DTO도 ResponseDTO를 이용해 리턴할 수 있게 제너릭을 이용했다.