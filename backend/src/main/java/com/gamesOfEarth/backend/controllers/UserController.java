package com.gamesOfEarth.backend.controllers;


import javax.net.ssl.HttpsURLConnection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.gamesOfEarth.backend.entitybeans.User;
import com.gamesOfEarth.backend.services.UserService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;

@RestController
public class UserController {
	@Autowired
	private UserService userService;
//	@Autowired(required = true)
//	private Navbar navbar;
	@PostMapping("/user-login")
	public boolean setUser(@RequestBody User user,HttpServletRequest req) {
		User user1=userService.getUserLogin(user.getEmail(), user.getPassword());
		if(user1!=null) {
			HttpSession session = req.getSession();
			session.setAttribute("user",user1);
			return true;
		}
		return false;
	}
	@PostMapping("/create-user")
	public boolean addUser(@RequestBody User user) {
		User user1=userService.getUserByEmmail(user.getEmail());
		if(user1==null) {
			userService.addUser(user);
			return true;
		}
		return false;
		
	}
	@GetMapping("/getUser")
	public User getLogInedUser(HttpSession session) {
		return (User)session.getAttribute("user");
	}
	@GetMapping("/isLogged")
	public boolean getLogged(HttpSession session) {
		return session.getAttribute("user")==null?false:true;
	}
	@PostMapping("/log-out")
	public void logOut(HttpSession session) {
		session.invalidate();
	}
//	@GetMapping("/navlinks")
//	public Navbar getNavbaar(HttpSession session) {
//		if(session.getAttribute("user")==null) {
//			navbar.setNavbarLinks(new String[]{"About Us","Docs","Home"});
//		}
//		return ;
//	}
}
