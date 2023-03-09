package com.gamesOfEarth.backend.services;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gamesOfEarth.backend.repositories.EventRepository;

@Service
public class EventService {
	@Autowired
	private EventRepository eventRepository;
}
