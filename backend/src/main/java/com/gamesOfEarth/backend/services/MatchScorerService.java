package com.gamesOfEarth.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gamesOfEarth.backend.repositories.MatchScorerRepository;

@Service
public class MatchScorerService {
	@Autowired
	private MatchScorerRepository matchScorerRepository;
}
