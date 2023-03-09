package com.gamesOfEarth.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gamesOfEarth.backend.repositories.BudgetEstimationRepository;

@Service
public class BudgetEstimationService {
	@Autowired
	private BudgetEstimationRepository budgetEstimationRepository;
}
