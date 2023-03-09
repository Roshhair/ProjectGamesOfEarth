package com.gamesOfEarth.backend.entitybeans;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="budget_estimations")
public class BudgetEstimation {
	@Id
	private int id;
	@Column
	private String itemName;
	@Column
	private int quantity;
	@Column
	private int price;
	@ManyToOne
	@JoinColumn(name="event_id",nullable = false)
	private Event event;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getItemName() {
		return itemName;
	}
	public void setItemName(String itemName) {
		this.itemName = itemName;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public Event getEvent() {
		return event;
	}
	public void setEvent(Event event) {
		this.event = event;
	}
	@Override
	public String toString() {
		return "BudgetEstimation [id=" + id + ", itemName=" + itemName + ", quantity=" + quantity + ", price=" + price
				+ ", event=" + event + "]";
	}
	public BudgetEstimation(int id, String itemName, int quantity, int price, Event event) {
		super();
		this.id = id;
		this.itemName = itemName;
		this.quantity = quantity;
		this.price = price;
		this.event = event;
	}
	
}
