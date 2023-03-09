package com.gamesOfEarth.backend.entitybeans;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="match_scorers")
public class MatchScorer {
	@Id
	private int id;
	@Column
	private int goalScored;
	@ManyToOne
	@JoinColumn(name="match_id",nullable = false)
	private Match match;
	@ManyToOne
	@JoinColumn(name="player_id",nullable = false)
	private Player player;
	public MatchScorer() {
		// TODO Auto-generated constructor stub
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getGoalScored() {
		return goalScored;
	}
	public void setGoalScored(int goalScored) {
		this.goalScored = goalScored;
	}
	public Match getMatch() {
		return match;
	}
	public void setMatch(Match match) {
		this.match = match;
	}
	public Player getPlayer() {
		return player;
	}
	public void setPlayer(Player player) {
		this.player = player;
	}
	@Override
	public String toString() {
		return "MatchScorer [id=" + id + ", goalScored=" + goalScored + ", match=" + match + ", player=" + player + "]";
	}
	public MatchScorer(int id, int goalScored, Match match, Player player) {
		super();
		this.id = id;
		this.goalScored = goalScored;
		this.match = match;
		this.player = player;
	}
	
}
