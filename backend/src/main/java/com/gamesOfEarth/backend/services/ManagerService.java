package com.gamesOfEarth.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gamesOfEarth.backend.repositories.ManagerRepository;

@Service
public class ManagerService {
	@Autowired
	private ManagerRepository managerRepository;
}
