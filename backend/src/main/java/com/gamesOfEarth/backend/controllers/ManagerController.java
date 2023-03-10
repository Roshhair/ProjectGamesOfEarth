package com.gamesOfEarth.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.gamesOfEarth.backend.entitybeans.Manager;
import com.gamesOfEarth.backend.entitybeans.Team;
import com.gamesOfEarth.backend.services.ManagerService;

@RestController
public class ManagerController {
	@Autowired
	private ManagerService managerService;
	public void addManager(@RequestParam Manager manager,@RequestParam Team team) {
		managerService.AddManger(manager, team);
	}
}
