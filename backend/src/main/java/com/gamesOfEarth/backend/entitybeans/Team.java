package com.gamesOfEarth.backend.entitybeans;


import java.util.Set;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="teams")
public class Team {
	@Id
	private int id;
	@Column
	private String name;
	@ManyToOne
	@JoinColumn(name="event_id" ,nullable = false)
	private Event event;
	@ManyToMany
	@JoinTable(name="players_in_teams",
	joinColumns = @JoinColumn(name="team_id"),
	inverseJoinColumns = @JoinColumn(name="player_id"))
	private Set<Player> players;
	@OneToOne(mappedBy = "team")
	private Manager manager;
	@OneToMany(mappedBy = "teamOne")
	private Set<Match> matches;
	@OneToMany(mappedBy = "teamTwo")
	private Set<Match> matches1;
	
	public Team() {
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

	public Event getEvent() {
		return event;
	}

	public void setEvent(Event event) {
		this.event = event;
	}

	public Set<Player> getPlayers() {
		return players;
	}

	public void setPlayers(Set<Player> players) {
		this.players = players;
	}

	public Manager getManager() {
		return manager;
	}

	public void setManager(Manager manager) {
		this.manager = manager;
	}

	public Set<Match> getMatches() {
		return matches;
	}

	public void setMatches(Set<Match> matches) {
		this.matches = matches;
	}

	public Set<Match> getMatches1() {
		return matches1;
	}

	public void setMatches1(Set<Match> matches1) {
		this.matches1 = matches1;
	}

	@Override
	public String toString() {
		return "Team [id=" + id + ", name=" + name + ", event=" + event + ", players=" + players + ", manager="
				+ manager + ", matches=" + matches + ", matches1=" + matches1 + "]";
	}

	public Team(int id, String name, Event event, Set<Player> players, Manager manager, Set<Match> matches,
			Set<Match> matches1) {
		super();
		this.id = id;
		this.name = name;
		this.event = event;
		this.players = players;
		this.manager = manager;
		this.matches = matches;
		this.matches1 = matches1;
	}
	
	
	
	
}
