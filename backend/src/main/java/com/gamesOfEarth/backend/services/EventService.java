package com.gamesOfEarth.backend.services;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gamesOfEarth.backend.entitybeans.Event;
import com.gamesOfEarth.backend.repositories.EventRepository;

@Service
public class EventService {
	@Autowired
	private EventRepository eventRepository;
	public List<Event> getAllEvents(){
		return eventRepository.findAll();
	}
}
