package com.gamesOfEarth.backend.services;


import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gamesOfEarth.backend.entitybeans.User;
import com.gamesOfEarth.backend.repositories.UserRepository;

@Service
public class UserService {
	@Autowired
	private UserRepository userRepository;
	
	public User getUser() {
		return userRepository.findById(1).get();
	}
	public List<User> name() {
		return userRepository.findAll();
	}
	public void set(User user) {
		userRepository.save(user);
	}
	public User getUserLogin(String email,String password) {
		return userRepository.getUserBy(email, password);
	}
	
}
