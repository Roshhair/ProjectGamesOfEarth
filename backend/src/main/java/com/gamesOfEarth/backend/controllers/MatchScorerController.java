package com.gamesOfEarth.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.gamesOfEarth.backend.services.MatchScorerService;

@RestController
public class MatchScorerController {
	@Autowired
	private MatchScorerService matchScorerService;
}
