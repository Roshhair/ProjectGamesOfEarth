package com.gamesOfEarth.backend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.gamesOfEarth.backend.entitybeans.User;
import com.gamesOfEarth.backend.services.UserService;

import jakarta.annotation.PostConstruct;

@RestController
public class UserController {
	@Autowired
	private UserService userService;
	@GetMapping("/boi")
	public User boi() {
		return userService.getUser();
	}
	@GetMapping("/hello")
	public List<User> getAll(){
		return userService.name();
	}
	@PostMapping("/post")
	public void setUser(@RequestBody User user) {
		System.out.println(user);
		System.out.println(userService.getUserLogin(user.getEmail(), user.getPassword()));
//		userService.set(user);
	}
}
