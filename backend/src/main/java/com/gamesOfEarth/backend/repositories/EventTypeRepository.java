package com.gamesOfEarth.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gamesOfEarth.backend.entitybeans.EventType;
@Repository
public interface EventTypeRepository extends JpaRepository<EventType, Integer> {

}
