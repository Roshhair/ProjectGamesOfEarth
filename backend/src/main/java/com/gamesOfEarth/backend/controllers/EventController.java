package com.gamesOfEarth.backend.controllers;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.gamesOfEarth.backend.entitybeans.Event;
import com.gamesOfEarth.backend.entitybeans.Player;
import com.gamesOfEarth.backend.entitybeans.Team;
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
	@PostMapping("/add-playersFees/{id}")
	public void AddFees(@PathVariable int id,@RequestParam int value) {
		eventService.updateRegistrationFee(id, value);
	}
	@PostMapping("/add-team")
	public void addTeam(@RequestParam Team teamName,@RequestParam Player[] players,@RequestParam int id){
		List<Player> list=Arrays.asList(players);
		teamName.setPlayers(list);
		eventService.addTeamToEvent(teamName, id);
		return;
	}
	
	
}
