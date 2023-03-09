package com.gamesOfEarth.backend.entitybeans;

import java.util.Set;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
@Entity
@Table(name="features")
public class Feature {
	@Id
	private int id;
	@Column
	private String name;
	@ManyToMany(mappedBy = "features",fetch = FetchType.LAZY)
	private Set<Event> events;
	public Feature() {
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
	public Set<Event> getEvents() {
		return events;
	}
	public void setEvents(Set<Event> events) {
		this.events = events;
	}
	@Override
	public String toString() {
		return "Feature [id=" + id + ", name=" + name + ", events=" + events + "]";
	}
	public Feature(int id, String name, Set<Event> events) {
		super();
		this.id = id;
		this.name = name;
		this.events = events;
	}
	
}
