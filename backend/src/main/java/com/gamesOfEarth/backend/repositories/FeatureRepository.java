package com.gamesOfEarth.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gamesOfEarth.backend.entitybeans.Feature;

public interface FeatureRepository extends JpaRepository<Feature, Integer> {

}
