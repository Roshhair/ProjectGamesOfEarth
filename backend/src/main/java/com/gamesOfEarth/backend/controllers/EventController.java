package com.gamesOfEarth.backend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gamesOfEarth.backend.entitybeans.Event;
import com.gamesOfEarth.backend.entitybeans.User;
import com.gamesOfEarth.backend.services.EventService;

import jakarta.servlet.http.HttpSession;

@RestController
public class EventController {
	@Autowired
	private EventService eventService;
	@GetMapping("/get-events")
	public List<Event> getAllEvents(){
//		User user=(User)session.getAttribute("user");
		return eventService.getAllEvents();
	}
	@GetMapping("/get-user-events")
	public List<Event> getAllUserEvent(HttpSession session){
		User user=(User) session.getAttribute("user");
		if(user==null) {
			return null;
		}
		return eventService.getEventForUsers(user.getId());
	}
	
}
