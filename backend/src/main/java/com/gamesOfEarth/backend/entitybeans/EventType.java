package com.gamesOfEarth.backend.entitybeans;

import java.util.List;
import java.util.Set;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
@Entity
@Table(name="event_types")
public class EventType {
	@Id
	private int id;
	@Column
	private String name;
	@OneToMany(mappedBy = "eventType",fetch = FetchType.LAZY)
	private List<Event> events;
	public EventType() {
		// TODO Auto-generated constructor stub
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public List<Event> getEvents() {
		return events;
	}
	public void setEvents(List<Event> events) {
		this.events = events;
	}
	@Override
	public String toString() {
		return "EventType [id=" + id + ", name=" + name + ", events=" + events + "]";
	}
	public EventType(int id, String name, List<Event> events) {
		super();
		this.id = id;
		this.name = name;
		this.events = events;
	}
	
}
