package com.gamesOfEarth.backend.repositories;

//import org.aspectj.bridge.context.PinpointingMessageHandler;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.gamesOfEarth.backend.entitybeans.Sport;
//import com.gamesOfEarth.backend.entitybeans.User;
@Repository
public interface SportRepository extends JpaRepository<Sport, Integer> {
	@Query("select e.sport from Event e where e.id=:id")
	public Sport getUserByEventId(Integer id);
}
