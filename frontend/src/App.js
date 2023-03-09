// import logo from './logo.svg';
import './App.css';
import { Navigation } from './Components/NavigationBar/Navigation';
import React, { PureComponent } from 'react';
import LoginAndSignup from './Components/LoginAndSignup/LoginAndSignup';
import Footer from './Components/Footer/Footer';
import DashBoard from './Components/DashBoard/DashBoard';
import CreateEventPage from './Components/CreateEvent/CreateEventPage';
import TeamRegistration from './Components/TeamRegistration/TeamRegistration';
import PlayerRegistration from './Components/PlayerRegistration/PlayerRegistration';
import MatchList from './Components/MatchList/MatchList';
import UpdateMatch from './Components/UpdateMatch/UpdateMatch';
import BudgetEstimation from './Components/BudgetEstimation/BudgetEstimation';
import ExpenseManagement from './Components/ExpenseManagement/ExpenseManagement';
import Auction from './Components/Auction/Auction';
import AuctionManager from './Components/AuctionManager/AuctionManager';
import EventDetails from './Components/EventDetails/EventDetails';


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
        name: "Docs",
        css:'nav_a nav_text_only nav_li_a_text'
      },
      {
        id: 3,
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
          name:"Docs",
          id:2,
          licss:"footer_list_items",
          acss:"footer_list_links"
        },
        {
          name:"About Us",
          id:3,
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
        {/* <DashBoard/> */}
        {/* <CreateEventPage/> */}
        {/* <TeamRegistration/> */}
        {/* <PlayerRegistration/> */}
        {/* <MatchList/> */}
        {/* <UpdateMatch/> */}
        {/* <BudgetEstimation/> */}
        {/* <ExpenseManagement/> */}
        {/* <Auction/> */}
        {/* <AuctionManager/> */}
        <EventDetails/>
        <Footer data={this.state.footerLinks}/>
      </>
    )
  }
}



