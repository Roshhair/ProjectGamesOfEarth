package com.gamesOfEarth.backend.entitybeans;

import java.util.Set;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
@Entity
@Table(name="players")
public class Player {
	@Id
	private int id;
	@Column
	private String name;
	@Column
	private String email;
	@Column
	private String phone;
	@Column
	private String position;
	@Column
	private int age;
	@ManyToMany(mappedBy = "players",fetch = FetchType.LAZY)
	private Set<Event> events;
	@ManyToMany(mappedBy = "players",fetch = FetchType.LAZY)
	private Set<Team> teams;
	@OneToMany(mappedBy = "player",fetch = FetchType.LAZY)
	private Set<MatchScorer> matcheScorers;
	@OneToMany(mappedBy = "player",fetch = FetchType.LAZY)
	private Set<Auction> auctions;
	public Player() {
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
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getPosition() {
		return position;
	}
	public void setPosition(String position) {
		this.position = position;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public Set<Event> getEvents() {
		return events;
	}
	public void setEvents(Set<Event> events) {
		this.events = events;
	}
	public Set<Team> getTeams() {
		return teams;
	}
	public void setTeams(Set<Team> teams) {
		this.teams = teams;
	}
	public Set<MatchScorer> getMatcheScorers() {
		return matcheScorers;
	}
	public void setMatcheScorers(Set<MatchScorer> matcheScorers) {
		this.matcheScorers = matcheScorers;
	}
	public Set<Auction> getAuctions() {
		return auctions;
	}
	public void setAuctions(Set<Auction> auctions) {
		this.auctions = auctions;
	}
	public Player(int id, String name, String email, String phone, String position, int age, Set<Event> events,
			Set<Team> teams, Set<MatchScorer> matcheScorers, Set<Auction> auctions) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.phone = phone;
		this.position = position;
		this.age = age;
		this.events = events;
		this.teams = teams;
		this.matcheScorers = matcheScorers;
		this.auctions = auctions;
	}
	@Override
	public String toString() {
		return "Player [id=" + id + ", name=" + name + ", email=" + email + ", phone=" + phone + ", position="
				+ position + ", age=" + age + ", events=" + events + ", teams=" + teams + ", matcheScorers="
				+ matcheScorers + ", auctions=" + auctions + "]";
	}
}
