package com.gamesOfEarth.backend.controllers;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.gamesOfEarth.backend.entitybeans.Player;
import com.gamesOfEarth.backend.entitybeans.Team;
import com.gamesOfEarth.backend.services.TeamService;

@RestController
public class TeamController {
	@Autowired
	private TeamService teamService;
}
