package com.gamesOfEarth.backend.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gamesOfEarth.backend.entitybeans.Feature;
import com.gamesOfEarth.backend.repositories.FeatureRepository;

@Service
public class FeatureService {
	@Autowired
	private FeatureRepository featureRepository;
	public List<Feature> getAll(){
		return featureRepository.findAll();
	}
}
