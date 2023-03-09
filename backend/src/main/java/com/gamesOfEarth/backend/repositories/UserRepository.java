package com.gamesOfEarth.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gamesOfEarth.backend.entitybeans.User;

public interface UserRepository extends JpaRepository<User, Integer> {

}
