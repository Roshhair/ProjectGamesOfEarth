package com.gamesOfEarth.backend.services;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gamesOfEarth.backend.entitybeans.User;
import com.gamesOfEarth.backend.repositories.UserRepository;

@Service
public class UserService {
	@Autowired
	private UserRepository userRepository;
	public void addUser(User user) {
		userRepository.save(user);
	}
	public User getUserLogin(String email,String password) {
		return userRepository.getUserBy(email, password);
	}
	public User getUserByEmmail(String email) {
		return userRepository.getUserByEmail(email);
	}
	
}
