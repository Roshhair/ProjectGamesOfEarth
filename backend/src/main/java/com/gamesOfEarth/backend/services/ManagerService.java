package com.gamesOfEarth.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gamesOfEarth.backend.entitybeans.Manager;
import com.gamesOfEarth.backend.entitybeans.Team;
import com.gamesOfEarth.backend.repositories.ManagerRepository;

@Service
public class ManagerService {
	@Autowired
	private ManagerRepository managerRepository;
	public void AddManger(Manager manager,Team team) {
		manager.setTeam(team);
		managerRepository.save(manager);
	}
}
