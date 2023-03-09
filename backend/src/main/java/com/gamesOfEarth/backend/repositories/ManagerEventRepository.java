package com.gamesOfEarth.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gamesOfEarth.backend.entitybeans.ManagerEvent;

public interface ManagerEventRepository extends JpaRepository<ManagerEvent, Integer> {

}
