package com.gamesOfEarth.backend.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gamesOfEarth.backend.entitybeans.Team;
import com.gamesOfEarth.backend.repositories.TeamRepository;

@Service
public class TeamService {
	@Autowired
	private TeamRepository teamRepository;
	public void addTeam(Team team) {
		teamRepository.save(team);
	}
}
