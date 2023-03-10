package com.gamesOfEarth.backend.beans;

public class Navbar {
		private String[] navbarLinks;
		private boolean isLoggined;
		public Navbar(boolean isLoggined) {
//			super();
			System.out.println("called");
			navbarLinks= new String[]{"About Us","Docs","Home"};
			this.isLoggined = isLoggined;
		}
		public String[] getNavbarLinks() {
			return navbarLinks;
		}
		public void setNavbarLinks(String[] navbarLinks) {
			this.navbarLinks = navbarLinks;
		}
		public boolean isLoggined() {
			return isLoggined;
		}
		public void setLoggined(boolean isLoggined) {
			this.isLoggined = isLoggined;
		}
		public Navbar() {
			navbarLinks= new String[]{"About Us","Docs","Dashboard","Home"};
			this.isLoggined = true;
		}
		
}
