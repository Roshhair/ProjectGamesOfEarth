package com.gamesOfEarth.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.gamesOfEarth.backend.services.FeatureService;

@RestController
public class FeatureController {
	@Autowired
	private FeatureService featureService;
}
