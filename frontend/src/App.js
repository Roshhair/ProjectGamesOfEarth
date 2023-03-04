// import logo from './logo.svg';
import './App.css';
import { Navigation } from './Components/NavigationBar/Navigation';


import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor(props) {
    super(props)
  
    this.state = {
      home:"nav_text",
      services:"nav_text",
      aboutus:"nav_text",
      blog:"nav_text"
    }
  }

  navhander(event){
    
    this.setState({
      ...this.state,
      home:"nav_text",
      services:"nav_text",
      aboutus:"nav_text",
      blog:"nav_text"
    });
    const data=event.target.name;
    console.log(data);
    this.setState({...this.state,data:"nav_hilighted"})
  }

  render() {
    return (
      <Navigation data={this.state} click={this.navhander}/>
    )
  }
}



