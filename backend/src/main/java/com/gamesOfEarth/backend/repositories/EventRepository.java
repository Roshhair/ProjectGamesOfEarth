package com.gamesOfEarth.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gamesOfEarth.backend.entitybeans.Event;

public interface EventRepository extends JpaRepository<Event, Integer> {

}
