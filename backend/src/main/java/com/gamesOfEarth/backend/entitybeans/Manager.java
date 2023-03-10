package com.gamesOfEarth.backend.entitybeans;

import java.util.List;
//import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="managers")
public class Manager {
	@Id
	@GeneratedValue(strategy = GenerationType.TABLE)
	private int id;
	@Column
	private String name;
	@Column
	private int amountToPay;
	@Column
	private int amountPaid;
	@OneToOne
	@JoinColumn(name="team_id",referencedColumnName = "id")
	@JsonIgnore
	private Team team;
	@OneToMany(mappedBy = "manager",fetch = FetchType.LAZY)
	@JsonIgnore
	private List<Auction> auctions;
	public Manager() {
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "Manager [id=" + id + ", name=" + name + ", amountToPay=" + amountToPay + ", amountPaid=" + amountPaid
				+ ", team=" + team + ", auctions=" + auctions + "]";
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
	public int getAmountToPay() {
		return amountToPay;
	}
	public void setAmountToPay(int amountToPay) {
		this.amountToPay = amountToPay;
	}
	public int getAmountPaid() {
		return amountPaid;
	}
	public void setAmountPaid(int amountPaid) {
		this.amountPaid = amountPaid;
	}
	public Team getTeam() {
		return team;
	}
	public void setTeam(Team team) {
		this.team = team;
	}
	public List<Auction> getAuctions() {
		return auctions;
	}
	public void setAuctions(List<Auction> auctions) {
		this.auctions = auctions;
	}
	public Manager(int id, String name, int amountToPay, int amountPaid, Team team, List<Auction> auctions) {
		super();
		this.id = id;
		this.name = name;
		this.amountToPay = amountToPay;
		this.amountPaid = amountPaid;
		this.team = team;
		this.auctions = auctions;
	}
}
