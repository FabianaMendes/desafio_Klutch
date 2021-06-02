package com.example.klutch.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.klutch.entities.Solicitation;

public interface SolicitationRepository extends JpaRepository<Solicitation, Long>{
	
	List<Solicitation> findAll();

}
