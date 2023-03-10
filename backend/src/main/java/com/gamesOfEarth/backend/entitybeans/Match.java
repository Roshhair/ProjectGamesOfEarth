package com.gamesOfEarth.backend.entitybeans;


import java.util.Date;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
@Entity
@Table(name="matches")
public class Match {
	@Id
	@GeneratedValue(strategy = GenerationType.TABLE)
	private int id;
	@Column
	@Temporal(TemporalType.DATE)
	private Date date;
	@Column
	@Temporal(TemporalType.TIME)
	private Date startTime;
	@Column
	@Temporal(TemporalType.TIME)
	private Date endTime;
	@Column
	private String venue;
	@ManyToOne
	@JoinColumn(name="event_id",nullable = false)
	@JsonIgnore
	private Event event;
	@ManyToOne
	@JoinColumn(name="team_one_id",nullable = false)
	@JsonIgnore
	private Team teamOne;
	@ManyToOne
	@JoinColumn(name="team_two_id",nullable = false)
	@JsonIgnore
	private Team teamTwo;
	public Match() {
		// TODO Auto-generated constructor stub
	}
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public Date getStartTime() {
		return startTime;
	}

	public void setStartTime(Date startTime) {
		this.startTime = startTime;
	}

	public Date getEndTime() {
		return endTime;
	}

	public void setEndTime(Date endTime) {
		this.endTime = endTime;
	}

	public String getVenue() {
		return venue;
	}

	public void setVenue(String venue) {
		this.venue = venue;
	}

	public Event getEvent() {
		return event;
	}

	public void setEvent(Event event) {
		this.event = event;
	}

	public Team getTeamOne() {
		return teamOne;
	}

	public void setTeamOne(Team teamOne) {
		this.teamOne = teamOne;
	}

	public Team getTeamTwo() {
		return teamTwo;
	}

	public void setTeamTwo(Team teamTwo) {
		this.teamTwo = teamTwo;
	}

	@Override
	public String toString() {
		return "Match [id=" + id + ", date=" + date + ", startTime=" + startTime + ", endTime=" + endTime + ", venue="
				+ venue + ", event=" + event + ", teamOne=" + teamOne + ", teamTwo=" + teamTwo + "]";
	}

	public Match(int id, Date date, Date startTime, Date endTime, String venue, Event event, Team teamOne,
			Team teamTwo) {
		super();
		this.id = id;
		this.date = date;
		this.startTime = startTime;
		this.endTime = endTime;
		this.venue = venue;
		this.event = event;
		this.teamOne = teamOne;
		this.teamTwo = teamTwo;
	}	
}
