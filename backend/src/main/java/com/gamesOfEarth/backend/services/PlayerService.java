package com.gamesOfEarth.backend.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gamesOfEarth.backend.entitybeans.Event;
import com.gamesOfEarth.backend.entitybeans.Player;
import com.gamesOfEarth.backend.repositories.PlayerRepository;

@Service
public class PlayerService {
	@Autowired
	private PlayerRepository playerRepository;
	public List<Player> getAllPlayersByEventID(Integer id){
		return playerRepository.getAllPlayerByID(id);
	}
	public Player getPlayerByEmail(String email) {
		return playerRepository.getPlayer(email);
	}
	public void updatePlayer(Player player,Event event) {
		Player player1 =getPlayerByEmail(player.getEmail());
		if(player1!=null) {
			player=player1;
		}
		if(player.getEvents()==null) {
			List<Event> list =new ArrayList<>();
			player.setEvents(list);
			return;
		}
		player.getEvents().add(event);
		playerRepository.save(player);
	}
}
