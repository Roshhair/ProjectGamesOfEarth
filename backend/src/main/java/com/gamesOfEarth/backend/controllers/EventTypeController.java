package com.gamesOfEarth.backend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

//import com.gamesOfEarth.backend.entitybeans.Event;
import com.gamesOfEarth.backend.entitybeans.EventType;
import com.gamesOfEarth.backend.services.EventTypeService;

@RestController
public class EventTypeController {
	@Autowired
	private EventTypeService eventTypeService;
	@GetMapping("/get-event-types")
	public List<EventType> getAll(){
		return eventTypeService.getAll();
	}
	
}
