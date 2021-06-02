package com.example.klutch.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.klutch.dto.RateTableDTO;
import com.example.klutch.services.RateTableService;

@RestController
@RequestMapping("/rate_tables")
public class RateTableController {
	
	@Autowired
	private RateTableService service;
	
	@GetMapping
	public ResponseEntity<List<RateTableDTO>> findAll(){
		List<RateTableDTO> list = service.findAll();
		return ResponseEntity.ok().body(list);
	}
}
