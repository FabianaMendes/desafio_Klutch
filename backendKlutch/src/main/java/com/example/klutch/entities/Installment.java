package com.example.klutch.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tb_installment")
public class Installment implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private Double installmentNumber;
	private Double installmentInterest;
	private Double installmentValue;
	private Double fullValue;
	private Double comission;
	
	public Installment() {
		
	}

	public Installment(Long id, Double installmentNumber, Double installmentInterest, Double installmentValue,
			Double fullValue, Double comission) {
		super();
		this.id = id;
		this.installmentNumber = installmentNumber;
		this.installmentInterest = installmentInterest;
		this.installmentValue = installmentValue;
		this.fullValue = fullValue;
		this.comission = comission;
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

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Installment other = (Installment) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}
	
	

}
