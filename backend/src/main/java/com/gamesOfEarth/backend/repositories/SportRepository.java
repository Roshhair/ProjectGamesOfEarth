package com.gamesOfEarth.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gamesOfEarth.backend.entitybeans.Sport;

public interface SportRepository extends JpaRepository<Sport, Integer> {

}
