package com.example.klutch.dto;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import com.example.klutch.entities.RateTable;



public class RateTableDTO implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private Long id;
	private String name;
	private List<InstallmentDTO> installment = new ArrayList<>();
	
	public RateTableDTO() {		
	}

	public RateTableDTO(Long id, String name) {
		this.id = id;
		this.name = name;
	}
	
	public RateTableDTO(RateTable entity) {
		id = entity.getId();
		name = entity.getName();
		installment = entity.getInstallment().stream().map(x -> new InstallmentDTO(x)).collect(Collectors.toList());
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<InstallmentDTO> getInstallment() {
		return installment;
	}

	public void setInstallment(List<InstallmentDTO> installment) {
		this.installment = installment;
	}		
}
