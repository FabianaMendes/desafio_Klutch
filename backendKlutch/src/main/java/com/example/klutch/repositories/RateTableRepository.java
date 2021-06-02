package com.example.klutch.repositories;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.klutch.entities.RateTable;

public interface RateTableRepository extends JpaRepository<RateTable, Long>{
	
	List<RateTable> findAllByOrderById();

}
