package com.gamesOfEarth.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.gamesOfEarth.backend.entitybeans.User;
@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
	@Query("select u from User u where u.email=:emailID and u.password=:passwordID")
	public User getUserBy(String emailID,String passwordID);
	@Query("select u from User u where u.email=:emailid")
	public User getUserByEmail(String emailid);
}
