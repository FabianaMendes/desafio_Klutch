package com.example.klutch.dto;

import java.io.Serializable;

import com.example.klutch.entities.Installment;

public class InstallmentDTO implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private Long id;
	private Double installmentNumber;
	private Double installmentInterest;
	private Double installmentValue;
	private Double fullValue;
	private Double comission;
	
	public InstallmentDTO() {	
	}

	public InstallmentDTO(Long id, Double installmentNumber, Double installmentInterest, Double installmentValue, Double fullValue, Double comission) {
		
		this.id = id;
		this.installmentNumber = installmentNumber;
		this.installmentInterest = installmentInterest;
		this.installmentValue = installmentValue;
		this.fullValue = fullValue;
		this.comission = comission;
	}
	
	public InstallmentDTO(Installment entity) {
		
		id = entity.getId();
		installmentNumber = entity.getInstallmentNumber();
		installmentInterest = entity.getInstallmentInterest();
		installmentValue = entity.getInstallmentValue();
		fullValue = entity.getFullValue();
		comission = entity.getComission();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Double getInstallmentNumber() {
		return installmentNumber;
	}

	public void setInstallmentNumber(Double installmentNumber) {
		this.installmentNumber = installmentNumber;
	}

	public Double getInstallmentInterest() {
		return installmentInterest;
	}

	public void setInstallmentInterest(Double installmentInterest) {
		this.installmentInterest = installmentInterest;
	}

	public Double getInstallmentValue() {
		return installmentValue;
	}

	public void setInstallmentValue(Double installmentValue) {
		this.installmentValue = installmentValue;
	}

	public Double getFullValue() {
		return fullValue;
	}

	public void setFullValue(Double fullValue) {
		this.fullValue = fullValue;
	}

	public Double getComission() {
		return comission;
	}

	public void setComission(Double comission) {
		this.comission = comission;
	}
	
		
}
