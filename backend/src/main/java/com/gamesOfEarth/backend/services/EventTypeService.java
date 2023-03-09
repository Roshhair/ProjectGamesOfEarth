package com.gamesOfEarth.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gamesOfEarth.backend.repositories.EventTypeRepository;

@Service
public class EventTypeService {
	@Autowired
	private EventTypeRepository eventTypeRepository;
}
