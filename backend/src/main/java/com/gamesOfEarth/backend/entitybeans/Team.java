package com.gamesOfEarth.backend.entitybeans;


import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
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
	@GeneratedValue(strategy = GenerationType.TABLE)
	private int id;
	@Column
	private String name;
	@ManyToOne
	@JoinColumn(name="event_id" ,nullable = false)
	@JsonIgnore
	private Event event;
	@ManyToMany(fetch = FetchType.LAZY)
	@JoinTable(name="players_in_teams",
	joinColumns = @JoinColumn(name="team_id"),
	inverseJoinColumns = @JoinColumn(name="player_id"))
	@JsonIgnore
	private List<Player> players;
	@OneToOne(mappedBy = "team")
	@JsonIgnore
	private Manager manager;
	@OneToMany(mappedBy = "teamOne",fetch = FetchType.LAZY)
	@JsonIgnore
	private List<Match> matches;
	@OneToMany(mappedBy = "teamTwo",fetch = FetchType.LAZY)
	@JsonIgnore
	private List<Match> matches1;
	
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

	public List<Player> getPlayers() {
		return players;
	}

	public void setPlayers(List<Player> players) {
		this.players = players;
	}

	public Manager getManager() {
		return manager;
	}

	public void setManager(Manager manager) {
		this.manager = manager;
	}

	public List<Match> getMatches() {
		return matches;
	}

	public void setMatches(List<Match> matches) {
		this.matches = matches;
	}

	public List<Match> getMatches1() {
		return matches1;
	}

	public void setMatches1(List<Match> matches1) {
		this.matches1 = matches1;
	}

	@Override
	public String toString() {
		return "Team [id=" + id + ", name=" + name + ", event=" + event + ", players=" + players + ", manager="
				+ manager + ", matches=" + matches + ", matches1=" + matches1 + "]";
	}

	public Team(int id, String name, Event event, List<Player> players, Manager manager, List<Match> matches,
			List<Match> matches1) {
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
