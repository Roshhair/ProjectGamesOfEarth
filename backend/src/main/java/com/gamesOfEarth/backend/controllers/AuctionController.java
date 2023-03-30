package com.gamesOfEarth.backend.controllers;

import java.util.Enumeration;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.gamesOfEarth.backend.services.AuctionService;

import jakarta.servlet.http.HttpServletRequest;

@RestController
public class AuctionController {
	@Autowired
	private AuctionService auctionService;
	@PostMapping("/postmiltiple")
	public void getMultiple(@RequestParam String email) {
		System.out.println(email);
	}
}
