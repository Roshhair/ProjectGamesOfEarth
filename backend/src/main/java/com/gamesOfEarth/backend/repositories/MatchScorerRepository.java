package com.gamesOfEarth.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gamesOfEarth.backend.entitybeans.MatchScorer;

public interface MatchScorerRepository extends JpaRepository<MatchScorer, Integer> {

}
