package com.example.klutch.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.klutch.entities.Client;

public interface ClientRepository extends JpaRepository<Client, Long>{
	
	List<Client> findAllByOrderByNameAsc(); 
	
}
