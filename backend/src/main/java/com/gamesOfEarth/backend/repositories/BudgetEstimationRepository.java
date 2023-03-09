package com.gamesOfEarth.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gamesOfEarth.backend.entitybeans.BudgetEstimation;

public interface BudgetEstimationRepository extends JpaRepository<BudgetEstimation, Integer> {

}
