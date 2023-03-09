package com.gamesOfEarth.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gamesOfEarth.backend.entitybeans.EventType;

public interface EventTypeRepository extends JpaRepository<EventType, Integer> {

}
