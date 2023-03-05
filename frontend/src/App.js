// import logo from './logo.svg';
import './App.css';
import { Navigation } from './Components/NavigationBar/Navigation';
import React, { PureComponent } from 'react';
import LoginAndSignup from './Components/LoginAndSignup/LoginAndSignup';
import HomeSection from './Components/HomeSection/homesection';
import Footer from './Components/Footer/Footer';
import Dashboard from './Components/Dashboard/Dashboard';

export default class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      //Forunlogined 
      isLogined:false,
      show:false,
      navbarLinks: [{
        id: 1,
        name: "About Us",
        css:'nav_a nav_text_only nav_li_a_text'
      },
      {
        id: 2,
        name: "Blog",
        css:'nav_a nav_text_only nav_li_a_text'
      },
      {
        id: 3,
        name: "Services",
        css:'nav_a nav_text_only nav_li_a_text'
      },
      {
        id: 4,
        name: "Home",
        css:'nav_a nav_text_only nav_li_a_text'
      }
      ],
      footerLinks:[
        {
          name:"Terms",
          id:1,
          licss:"footer_list_items",
          acss:"footer_list_links"
        },
        {
          name:"Privacy",
          id:2,
          licss:"footer_list_items",
          acss:"footer_list_links"
        },
        {
          name:"Security",
          id:3,
          licss:"footer_list_items",
          acss:"footer_list_links"
        },
        {
          name:"Docs",
          id:4,
          licss:"footer_list_items",
          acss:"footer_list_links"
        },
        {
          name:"Blog",
          id:5,
          licss:"footer_list_items",
          acss:"footer_list_links"
        },
        {
          name:"About Us",
          id:6,
          licss:"footer_list_items",
          acss:"footer_list_links"
        },
      ]
    }
  }

  toggleIsLogined(){
    if(this.state.isLogined){
      this.setState({...this.state,isLogined:false});
    }
    else{
      this.setState({...this.state,isLogined:true});
    }
  }

  toggleShow(){
    this.setState({...this.state,show:true});
  }

  setShowFalse(){
    this.setState({...this.state,show:false});
  }

  navhander(event) {

    this.setState({
      ...this.state,
      home: "nav_text",
      services: "nav_text",
      aboutus: "nav_text",
      blog: "nav_text"
    });
    const data = event.target.name;
    console.log(data);
    this.setState({ ...this.state, data: "nav_hilighted" })
  }

  render() {
    return (
      <>
        
        <Navigation data={this.state} toggleIsLogined={()=>{this.toggleIsLogined()}} toggleShow={()=>{this.toggleShow()}} />
        <LoginAndSignup show={this.state.show} setShowFalse={()=>{this.setShowFalse()}} />
        <HomeSection />
        <Dashboard/>
        <Footer data={this.state.footerLinks}/>
      </>
    )
  }
}



