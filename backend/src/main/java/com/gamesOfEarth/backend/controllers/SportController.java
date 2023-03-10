package com.gamesOfEarth.backend.controllers;

import java.util.List;

import org.apache.tomcat.jni.Sockaddr;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gamesOfEarth.backend.entitybeans.Sport;
import com.gamesOfEarth.backend.services.SportService;

@RestController
public class SportController {
	@Autowired
	private SportService sportService;
	@GetMapping("/get-sports")
	public List<Sport> getSports(){
		return sportService.getSports();
	}
}
