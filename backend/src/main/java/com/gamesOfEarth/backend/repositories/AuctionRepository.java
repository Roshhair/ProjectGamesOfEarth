package com.gamesOfEarth.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gamesOfEarth.backend.entitybeans.Auction;
@Repository
public interface AuctionRepository extends JpaRepository<Auction, Integer> {

}
