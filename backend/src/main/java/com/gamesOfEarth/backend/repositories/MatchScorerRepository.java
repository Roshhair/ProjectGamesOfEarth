package com.gamesOfEarth.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gamesOfEarth.backend.entitybeans.MatchScorer;
@Repository
public interface MatchScorerRepository extends JpaRepository<MatchScorer, Integer> {

}
