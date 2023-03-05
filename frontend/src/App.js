// import logo from './logo.svg';
import './App.css';
import { Navigation } from './Components/NavigationBar/Navigation';
import React, { PureComponent } from 'react';
import LoginAndSignup from './Components/LoginAndSignup/LoginAndSignup';

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
        css:'nav_text text_only'
      },
      {
        id: 2,
        name: "Blog",
        css:'nav_text text_only'
      },
      {
        id: 3,
        name: "Services",
        css:'nav_text text_only'
      },
      {
        id: 4,
        name: "Home",
        css:'nav_text text_only'
      }
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

  setShowTrue(){
      this.setState({...this.state,show:true});
  }
  setShowFalse(){
    this.setState({...this.state,show:false});
    // console.log(false)
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
        <Navigation data={this.state} toggleIsLogined={()=>{this.toggleIsLogined()}} toggleShow={()=>{this.setShowTrue()}} />
        <LoginAndSignup show={this.state.show} setShowFalse={()=>{this.setShowFalse()}} />
      </>
    )
  }
}



