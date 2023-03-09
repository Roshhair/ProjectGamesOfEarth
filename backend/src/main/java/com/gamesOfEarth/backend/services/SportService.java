package com.gamesOfEarth.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gamesOfEarth.backend.repositories.SportRepository;

@Service
public class SportService {
	@Autowired
	private SportRepository sportRepository;
}
