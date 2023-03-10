package com.gamesOfEarth.backend.services;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gamesOfEarth.backend.entitybeans.Event;
import com.gamesOfEarth.backend.entitybeans.Player;
import com.gamesOfEarth.backend.entitybeans.Team;
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
	public void updateRegistrationFee(int id,int value) {
		Event event =eventRepository.findById(id).get();
		event.setPlayerRegistrationFee(value);
		eventRepository.save(event);
	}
	public void addTeamToEvent(Team team,int id) {
		Event event=eventRepository.findById(id).get();
		if(event.getTeams()==null) {
			List<Team> list=new ArrayList<>();
			event.setTeams(list);
		}
		event.getTeams().add(team);
	}
}
