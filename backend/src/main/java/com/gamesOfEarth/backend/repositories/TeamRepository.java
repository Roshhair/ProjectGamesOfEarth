package com.gamesOfEarth.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gamesOfEarth.backend.entitybeans.Team;

public interface TeamRepository extends JpaRepository<Team, Integer> {

}
