package com.gamesOfEarth.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gamesOfEarth.backend.entitybeans.Player;

public interface PlayerRepository extends JpaRepository<Player, Integer> {

}
