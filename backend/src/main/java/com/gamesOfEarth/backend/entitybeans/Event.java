package com.gamesOfEarth.backend.entitybeans;

import java.sql.Date;
import java.util.Set;



import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
@Entity
@Table(name="events")
public class Event {
	@Id
	private int id;
	@Column
	private String name;
	@Column
	private Date startDate;
	@Column
	private Date endDate;
	@Column
	private String venue;
	@Column
	private int playerRegistrationFee;
	@ManyToOne
	@JoinColumn(name="user_id")
	private User user;
	@ManyToMany(fetch = FetchType.LAZY)
	@JoinTable(name="features_in_events",
	joinColumns = @JoinColumn(name="event_id"),
	inverseJoinColumns =  @JoinColumn(name="feature_id"))
	private Set<Feature> features;
	@ManyToOne
	@JoinColumn(name="sport_id",nullable = false)
	private Sport sport;
	@ManyToOne
	@JoinColumn(name="event_type_id",nullable = false)
	private EventType eventType;
	@ManyToMany(fetch = FetchType.LAZY)
	@JoinTable(name = "players_in_events",
	joinColumns = @JoinColumn(name="event_id"),
	inverseJoinColumns = @JoinColumn(name="player_id"))
	private Set<Player> players;
	@OneToMany(mappedBy = "event",fetch = FetchType.LAZY)
	private Set<Team> teams;
	@OneToMany(mappedBy = "event",fetch = FetchType.LAZY)
	private Set<Match> matches;
	@OneToMany(mappedBy = "event",fetch = FetchType.LAZY)
	private Set<BudgetEstimation> budgetEstimations;
	@OneToOne(mappedBy = "event")
	private ManagerEvent managerEvent;
	public Event() {
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
	public Date getStartDate() {
		return startDate;
	}
	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}
	public Date getEndDate() {
		return endDate;
	}
	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}
	public String getVenue() {
		return venue;
	}
	public void setVenue(String venue) {
		this.venue = venue;
	}
	public int getPlayerRegistrationFee() {
		return playerRegistrationFee;
	}
	public void setPlayerRegistrationFee(int playerRegistrationFee) {
		this.playerRegistrationFee = playerRegistrationFee;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public Set<Feature> getFeatures() {
		return features;
	}
	public void setFeatures(Set<Feature> features) {
		this.features = features;
	}
	public Sport getSport() {
		return sport;
	}
	public void setSport(Sport sport) {
		this.sport = sport;
	}
	public EventType getEventType() {
		return eventType;
	}
	public void setEventType(EventType eventType) {
		this.eventType = eventType;
	}
	public Set<Player> getPlayers() {
		return players;
	}
	public void setPlayers(Set<Player> players) {
		this.players = players;
	}
	public Set<Team> getTeams() {
		return teams;
	}
	public void setTeams(Set<Team> teams) {
		this.teams = teams;
	}
	public Set<Match> getMatches() {
		return matches;
	}
	public void setMatches(Set<Match> matches) {
		this.matches = matches;
	}
	public Set<BudgetEstimation> getBudgetEstimations() {
		return budgetEstimations;
	}
	public void setBudgetEstimations(Set<BudgetEstimation> budgetEstimations) {
		this.budgetEstimations = budgetEstimations;
	}
	public ManagerEvent getManagerEvent() {
		return managerEvent;
	}
	public void setManagerEvent(ManagerEvent managerEvent) {
		this.managerEvent = managerEvent;
	}
	public Event(int id, String name, Date startDate, Date endDate, String venue, int playerRegistrationFee, User user,
			Set<Feature> features, Sport sport, EventType eventType, Set<Player> players, Set<Team> teams,
			Set<Match> matches, Set<BudgetEstimation> budgetEstimations, ManagerEvent managerEvent) {
		super();
		this.id = id;
		this.name = name;
		this.startDate = startDate;
		this.endDate = endDate;
		this.venue = venue;
		this.playerRegistrationFee = playerRegistrationFee;
		this.user = user;
		this.features = features;
		this.sport = sport;
		this.eventType = eventType;
		this.players = players;
		this.teams = teams;
		this.matches = matches;
		this.budgetEstimations = budgetEstimations;
		this.managerEvent = managerEvent;
	}
	@Override
	public String toString() {
		return "Event [id=" + id + ", name=" + name + ", startDate=" + startDate + ", endDate=" + endDate + ", venue="
				+ venue + ", playerRegistrationFee=" + playerRegistrationFee + ", user=" + user + ", features="
				+ features + ", sport=" + sport + ", eventType=" + eventType + ", players=" + players + ", teams="
				+ teams + ", matches=" + matches + ", budgetEstimations=" + budgetEstimations + ", managerEvent="
				+ managerEvent + "]";
	}
	

}
