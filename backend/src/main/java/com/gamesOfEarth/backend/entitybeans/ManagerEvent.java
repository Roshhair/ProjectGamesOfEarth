package com.gamesOfEarth.backend.entitybeans;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="manager_event")
public class ManagerEvent {
	@Id 
	private int id;
	@Column
	private int playerBasePrice;
	@Column
	private int minSpending;
	@Column
	private int maxSpending;
	@OneToOne
	@JoinColumn(name="event_id",nullable = false)
	private Event event;
	public ManagerEvent() {
		// TODO Auto-generated constructor stub
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getPlayerBasePrice() {
		return playerBasePrice;
	}
	public void setPlayerBasePrice(int playerBasePrice) {
		this.playerBasePrice = playerBasePrice;
	}
	public int getMinSpending() {
		return minSpending;
	}
	public void setMinSpending(int minSpending) {
		this.minSpending = minSpending;
	}
	public int getMaxSpending() {
		return maxSpending;
	}
	public void setMaxSpending(int maxSpending) {
		this.maxSpending = maxSpending;
	}
	public Event getEvent() {
		return event;
	}
	public void setEvent(Event event) {
		this.event = event;
	}
	public ManagerEvent(int id, int playerBasePrice, int minSpending, int maxSpending, Event event) {
		super();
		this.id = id;
		this.playerBasePrice = playerBasePrice;
		this.minSpending = minSpending;
		this.maxSpending = maxSpending;
		this.event = event;
	}
	@Override
	public String toString() {
		return "ManagerEvent [id=" + id + ", playerBasePrice=" + playerBasePrice + ", minSpending=" + minSpending
				+ ", maxSpending=" + maxSpending + ", event=" + event + "]";
	}
	
}
