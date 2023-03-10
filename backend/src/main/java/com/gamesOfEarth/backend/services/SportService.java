package com.gamesOfEarth.backend.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gamesOfEarth.backend.entitybeans.Sport;
import com.gamesOfEarth.backend.repositories.SportRepository;

@Service
public class SportService {
	@Autowired
	private SportRepository sportRepository;
	public List<Sport> getSports(){
		return sportRepository.findAll();
	}
}
