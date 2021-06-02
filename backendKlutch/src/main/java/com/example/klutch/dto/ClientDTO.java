package com.example.klutch.dto;

import java.io.Serializable;

import com.example.klutch.entities.Bank;
import com.example.klutch.entities.Client;

public class ClientDTO implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private Long id;
	private String name;
	private String phone;
	private String cpf;
	private Bank bank;
	
	public ClientDTO() {
		
	}

	public ClientDTO(Long id, String name, String phone, String cpf, Bank bank) {
		super();
		this.id = id;
		this.name = name;
		this.phone = phone;
		this.cpf = cpf;
		this.bank = bank;
	}
	
	public ClientDTO(Client entity) {
		id = entity.getId();
		name = entity.getName();
		phone = entity.getPhone();
		cpf = entity.getCpf();
		bank = entity.getBank();
	}

	public Bank getBank() {
		return bank;
	}

	public void setBank(Bank bank) {
		this.bank = bank;
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

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}
	
	

}
