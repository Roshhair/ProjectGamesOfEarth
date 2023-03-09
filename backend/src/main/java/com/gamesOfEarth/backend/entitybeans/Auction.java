package com.gamesOfEarth.backend.entitybeans;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="auctions")
public class Auction {
	@Id
	private int id;
	@Column(nullable = true)
	private int soldAt;
	@ManyToOne
	@JoinColumn(name="player_id",nullable = false)
	private Player player;
	@ManyToOne
	@JoinColumn(name="manager_id",nullable = true)
	private Manager manager;
	public Auction() {
		// TODO Auto-generated constructor stub
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getSoldAt() {
		return soldAt;
	}
	public void setSoldAt(int soldAt) {
		this.soldAt = soldAt;
	}
	public Player getPlayer() {
		return player;
	}
	public void setPlayer(Player player) {
		this.player = player;
	}
	public Manager getManager() {
		return manager;
	}
	public void setManager(Manager manager) {
		this.manager = manager;
	}
	@Override
	public String toString() {
		return "Auction [id=" + id + ", soldAt=" + soldAt + ", player=" + player + ", manager=" + manager + "]";
	}
	public Auction(int id, int soldAt, Player player, Manager manager) {
		super();
		this.id = id;
		this.soldAt = soldAt;
		this.player = player;
		this.manager = manager;
	}
	
	
}
