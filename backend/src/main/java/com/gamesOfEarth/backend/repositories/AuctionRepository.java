package com.gamesOfEarth.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gamesOfEarth.backend.entitybeans.Auction;

public interface AuctionRepository extends JpaRepository<Auction, Integer> {

}
