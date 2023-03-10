package com.gamesOfEarth.backend.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.gamesOfEarth.backend.entitybeans.Player;
@Repository
public interface PlayerRepository extends JpaRepository<Player, Integer> {
	@Query("select e.players from Event e where e.id=:id")
	public List<Player> getAllPlayerByID(Integer id);
	@Query("select p from Player p where p.email=:emailid")
	public Player getPlayer(String emailid);
}
