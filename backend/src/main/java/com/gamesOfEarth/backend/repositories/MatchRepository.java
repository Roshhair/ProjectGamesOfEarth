package com.gamesOfEarth.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gamesOfEarth.backend.entitybeans.Match;

public interface MatchRepository extends JpaRepository<Match, Integer> {

}
