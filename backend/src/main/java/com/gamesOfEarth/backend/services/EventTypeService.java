package com.gamesOfEarth.backend.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gamesOfEarth.backend.entitybeans.EventType;
import com.gamesOfEarth.backend.repositories.EventTypeRepository;

@Service
public class EventTypeService {
	@Autowired
	private EventTypeRepository eventTypeRepository;
	public List<EventType> getAll(){
		return eventTypeRepository.findAll();
	}
}
