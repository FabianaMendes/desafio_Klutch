package com.example.klutch.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.klutch.dto.RateTableDTO;
import com.example.klutch.entities.RateTable;
import com.example.klutch.repositories.RateTableRepository;

@Service
public class RateTableService {
	
	@Autowired
	private RateTableRepository repository;
	
	@Transactional(readOnly = true)
	public List<RateTableDTO> findAll() {
		List<RateTable> list = repository.findAll();
		return list.stream().map(x -> new RateTableDTO(x)).collect(Collectors.toList());
	}
}
