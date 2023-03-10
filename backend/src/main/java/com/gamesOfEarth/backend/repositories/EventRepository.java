package com.gamesOfEarth.backend.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.gamesOfEarth.backend.entitybeans.Event;
@Repository
public interface EventRepository extends JpaRepository<Event, Integer> {
	@Query("select u.events from User u where u.id=:id")
	public List<Event> getUserEvents(Integer id);
}
