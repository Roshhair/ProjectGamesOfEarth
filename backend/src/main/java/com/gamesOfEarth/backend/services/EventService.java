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
	public Event getEventByID(Integer id) {
		return eventRepository.findById(id).get();
	}
	public Event addEvent(Event event) {
		return eventRepository.save(event);
	}
	public List<Event> getEventForUsers(int id){
		return eventRepository.getUserEvents(id);
	}
}
