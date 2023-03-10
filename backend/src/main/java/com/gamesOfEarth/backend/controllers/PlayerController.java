package com.gamesOfEarth.backend.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.gamesOfEarth.backend.entitybeans.Event;
import com.gamesOfEarth.backend.entitybeans.Player;
import com.gamesOfEarth.backend.services.EventService;
import com.gamesOfEarth.backend.services.PlayerService;

@RestController
public class PlayerController {
	@Autowired
	private PlayerService playerService;
	@Autowired
	private EventService eventService;
	@GetMapping("/event-players/{id}")
	public List<Player> getPlayersByEvent(@PathVariable int id){
		return playerService.getAllPlayersByEventID(id);
	}
	@PostMapping("/player-add/{id}")
	public void addPlayer(@RequestParam Player player,@PathVariable int id) {
		Event event=eventService.getEventByID(id);
		playerService.updatePlayer(player, event);
	}
}
