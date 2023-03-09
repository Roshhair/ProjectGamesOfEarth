package com.gamesOfEarth.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gamesOfEarth.backend.entitybeans.ManagerEvent;
@Repository
public interface ManagerEventRepository extends JpaRepository<ManagerEvent, Integer> {

}
