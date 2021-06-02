package com.example.klutch.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.klutch.dto.SolicitationDTO;
import com.example.klutch.entities.Solicitation;
import com.example.klutch.repositories.SolicitationRepository;

@Service
public class SolicitationService {

	@Autowired
	private SolicitationRepository repository;
	
	@Transactional(readOnly = true)
	public List<SolicitationDTO> findAll(){
		List<Solicitation> list = repository.findAll();
		return list.stream().map(x -> new SolicitationDTO(x)).collect(Collectors.toList());
	}
	
	@Transactional
	public SolicitationDTO insert(SolicitationDTO dto) {
		Solicitation solicitation = new Solicitation(null, dto.getClientId(), 
				dto.getInstallmentInterest(), dto.getInstallmentInterestValue(), dto.getComission(), 
				dto.getComissionValue(), dto.getInstallmentValue(), dto.getCardNumber(), dto.getDesiredValue(), 
				dto.getTotalLoan(), dto.installmentId, dto.getRateTableId());
		
		solicitation = repository.save(solicitation);
		return new SolicitationDTO(solicitation);
	}
}
