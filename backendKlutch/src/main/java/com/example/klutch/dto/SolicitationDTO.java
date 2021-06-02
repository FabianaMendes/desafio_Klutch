package com.example.klutch.dto;

import com.example.klutch.entities.Solicitation;

public class SolicitationDTO {
	
	private Long id;
	private Long clientId;
	private Double installmentInterest;
	private Double installmentInterestValue;
	private Double comission;
	private Double comissionValue;
	private Double installmentValue;
	private String cardNumber;
	private Double desiredValue;
	private Double totalLoan;
	public Long installmentId;
	public Long rateTableId;
	
	public SolicitationDTO() {		
	}

	public SolicitationDTO(Long id, Long clientId, Double installmentInterest, Double installmentInterestValue,
			Double comission, Double comissionValue, Double installmentValue, String cardNumber, Double desiredValue,
			Double totalLoan, Long installmentId, Long rateTableId) {
		
		this.id = id;
		this.clientId = clientId;
		this.installmentInterest = installmentInterest;
		this.installmentInterestValue = installmentInterestValue;
		this.comission = comission;
		this.comissionValue = comissionValue;
		this.installmentValue = installmentValue;
		this.cardNumber = cardNumber;
		this.desiredValue = desiredValue;
		this.totalLoan = totalLoan;
		this.installmentId = installmentId;
		this.rateTableId = rateTableId;
	}
	
	public SolicitationDTO(Solicitation entity) {
		
		id = entity.getId();
		clientId = entity.getClientId();
		installmentInterest = entity.getInstallmentInterest();
		installmentInterestValue = entity.getInstallmentInterestValue();
		comission = entity.getComission();
		comissionValue = entity.getComissionValue();
		installmentValue = entity.getInstallmentValue();
		cardNumber = entity.getCardNumber();
		desiredValue = entity.getDesiredValue();
		totalLoan = entity.getTotalLoan();
		installmentId = entity.installmentId;
		rateTableId = entity.getRateTableId();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getClientId() {
		return clientId;
	}

	public void setClientId(Long clientId) {
		this.clientId = clientId;
	}

	public Double getInstallmentInterest() {
		return installmentInterest;
	}

	public void setInstallmentInterest(Double installmentInterest) {
		this.installmentInterest = installmentInterest;
	}

	public Double getInstallmentInterestValue() {
		return installmentInterestValue;
	}

	public void setInstallmentInterestValue(Double installmentInterestValue) {
		this.installmentInterestValue = installmentInterestValue;
	}

	public Double getComission() {
		return comission;
	}

	public void setComission(Double comission) {
		this.comission = comission;
	}

	public Double getComissionValue() {
		return comissionValue;
	}

	public void setComissionValue(Double comissionValue) {
		this.comissionValue = comissionValue;
	}

	public Double getInstallmentValue() {
		return installmentValue;
	}

	public void setInstallmentValue(Double installmentValue) {
		this.installmentValue = installmentValue;
	}

	public String getCardNumber() {
		return cardNumber;
	}

	public void setCardNumber(String cardNumber) {
		this.cardNumber = cardNumber;
	}

	public Double getDesiredValue() {
		return desiredValue;
	}

	public void setDesiredValue(Double desiredValue) {
		this.desiredValue = desiredValue;
	}

	public Double getTotalLoan() {
		return totalLoan;
	}

	public void setTotalLoan(Double totalLoan) {
		this.totalLoan = totalLoan;
	}

	public Long getInstallmentId() {
		return installmentId;
	}

	public void setInstallmentId(Long installmentId) {
		this.installmentId = installmentId;
	}

	public Long getRateTableId() {
		return rateTableId;
	}

	public void setRateTableId(Long rateTableId) {
		this.rateTableId = rateTableId;
	}
	
	
	

}
