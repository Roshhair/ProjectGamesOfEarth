package com.gamesOfEarth.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.gamesOfEarth.backend.services.ManagerService;

@RestController
public class ManagerController {
	@Autowired
	private ManagerService managerService;
}
