package com.gamesOfEarth.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gamesOfEarth.backend.entitybeans.Manager;

public interface ManagerRepository extends JpaRepository<Manager, Integer> {

}
