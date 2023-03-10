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
@Table(name="sports")
public class Sport {
	@Id
	private int id;
	@Column
	private String name;
	@OneToMany(mappedBy = "sport",fetch = FetchType.LAZY)
	private List<Event> events;
	public Sport() {
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
		return "Sport [id=" + id + ", name=" + name + ", events=" + events + "]";
	}
	public Sport(int id, String name, List<Event> events) {
		super();
		this.id = id;
		this.name = name;
		this.events = events;
	}
	
}
