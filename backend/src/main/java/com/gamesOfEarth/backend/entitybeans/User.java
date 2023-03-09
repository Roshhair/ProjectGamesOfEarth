package com.gamesOfEarth.backend.entitybeans;

import java.util.Set;

import org.hibernate.internal.build.AllowSysOut;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
@Entity
@Table(name="users")
public class User {
	@Id
	private int id;
	@Column
	private String name;
	@Column
	private String email;
	@Column
	private String password;
	@OneToMany(mappedBy ="user",fetch = FetchType.EAGER)
	private Set<Event> events;
	public User() {
		System.out.println("Constrctor called");
		// TODO Auto-generated constructor stub
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
//		System.out.println(id);
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
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Set<Event> getEvents() {
		return events;
	}
	public void setEvents(Set<Event> events) {
		this.events = events;
	}
	@Override
	public String toString() {
		return "User [id=" + id + ", name=" + name + ", email=" + email + ", password=" + password + ", events="
				+ events + "]";
	}
	public User(int id, String name, String email, String password, Set<Event> events) {
		//super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.password = password;
		this.events = events;
	}
	public User(int id, String name, String email, String password) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.password = password;
		this.events = null;
	}
	
	
}
