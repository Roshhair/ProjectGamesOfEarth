package com.gamesOfEarth.backend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gamesOfEarth.backend.entitybeans.Feature;
import com.gamesOfEarth.backend.services.FeatureService;

@RestController
public class FeatureController {
	@Autowired
	private FeatureService featureService;
	@GetMapping("/get-all-features")
	public List<Feature> getAll(){
		return featureService.getAll();
	}
}
