package com.gamesOfEarth.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gamesOfEarth.backend.repositories.MatchRepository;

@Service
public class MatchService {
	@Autowired
	private MatchRepository matchRepository;
}
