package com.gamesOfEarth.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.gamesOfEarth.backend.services.BudgetEstimationService;

@RestController
public class BudgetEstimationController {
	@Autowired
	private BudgetEstimationService budgetEstimationService;
}
