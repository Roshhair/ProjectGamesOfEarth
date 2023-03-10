// import logo from './logo.svg';
import './App.css';
import { Navigation } from './Components/NavigationBar/Navigation';
import LoginAndSignup from './Components/LoginAndSignup/LoginAndSignup';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Card from './Components/Card/Card';
import Design from './Components/Design/Design';
import MatchMaker from './Components/MatchMaker/MatchMaker';
import Manager from './Components/Manager/Manager';
import ManagerAuc from './Components/Manager/ManagerAuc';
import Statusbar from './Components/Statusbar/Statusbar';
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
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import http from './Components/axiosHandler'

import React, { memo, useEffect, useState } from 'react'
import { ErrorPage } from './Components/ErrorPage/ErrorPage';

const App = () => {
  const [data,setData]=useState({
    navbarLinks: ["About Us","Docs","Home"],
      isLoggined:false
  })
  const [events,setEvents]=useState([]);
  const fetchEvents=()=>{
    http.get("/get-events").then(res=>{
      setEvents(res.data);
    })
  }
  const fetchisLoggedin=()=>{
    http.get("/isLogged").then(res=>{setData({...data,isLoggined:res.data}) ;console.log(res.data)})
  }
  useEffect(()=>{
    fetchEvents()
    fetchisLoggedin()
    // fetchData()
  },[]);
  const [footer,setFooter]=useState([
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
            ])

  return (
    <>
      
         <BrowserRouter>
           <Routes>
             {/* <LoginAndSignup show={this.state.show} setShowFalse={()=>{this.setShowFalse()}} /> */}
             {/* <Route path='/' element={<LoginAndSignup show={this.state.show} setShowFalse={()=>{this.setShowFalse()}} />}/> */}
             
             <Route index element={<><Navigation data={data}/><Home /><Card /><Design /><Footer data={footer} /></>}/>
             <Route path='/Home' element={<><Navigation data={data}/><Home /><Card /><Design /><Footer data={footer} /></>}/>
             <Route path='/SignUpOrLogin' element={<LoginAndSignup/>}/>
             {/* {!data.isLoggined&&<Route path='/*' element={<><Navigation data={data}/><ErrorPage/><Footer data={footer} /></>}/>} */}
             <><Route path='/Dashboard' element={<><Navigation data={data}/><DashBoard/><Footer data={footer} /></>}/>
             <Route path='/CreateEvent' element={<><Navigation data={data}/><CreateEventPage/><Footer data={footer} /></>}/></>
             {/* {data.isLoggined&&<Route path='/*' element={<><Navigation data={data}/><ErrorPage/><Footer data={footer} /></>}/>} */}
             <Route path='/*' element={<><Navigation data={data}/><ErrorPage/><Footer data={footer} /></>}/>
           </Routes>
         </BrowserRouter>

         
    </>
  )
}
export default React.memo(App)
// export default class App extends PureComponent {
//   constructor(props) {
//     super(props)

//     this.state = {
//       navbarLinks: [{
//         id: 1,
//         name: "About Us",
//         css:'nav_a nav_text_only nav_li_a_text'
//       },
//       {
//         id: 2,
//         name: "Docs",
//         css:'nav_a nav_text_only nav_li_a_text'
//       },
//       {
//         id: 3,
//         name: "Home",
//         css:'nav_a nav_text_only nav_li_a_text'
//       }
//       ],
//       footerLinks:[
//         {
//           name:"Terms",
//           id:1,
//           licss:"footer_list_items",
//           acss:"footer_list_links"
//         },
//         {
//           name:"Docs",
//           id:2,
//           licss:"footer_list_items",
//           acss:"footer_list_links"
//         },
//         {
//           name:"About Us",
//           id:3,
//           licss:"footer_list_items",
//           acss:"footer_list_links"
//         },
//       ],
//       events:[]
//     }
//   }
//   getEvents(){
//     http.get("/get-events")
//     .then((res)=>{
//       this.setState({...this.state,events:res.data});
//       // console.log(data)
//     })
//     .catch((err)=>{
//       console.log(err);
//     })
//   }
//   toggleIsLogined(){
//     if(this.state.isLogined){
//       this.setState({...this.state,isLogined:false});
//     }
//     else{
//       this.setState({...this.state,isLogined:true});
//     }
//   }

//   setShowTrue(){
//       this.setState({...this.state,show:true});
//   }
//   setShowFalse(){
//     this.setState({...this.state,show:false});
//     // console.log(false)
// }
  
// componentDidMount(){
//   // this.getEvents();
// }

//   navhander(event) {

//     this.setState({
//       ...this.state,
//       home: "nav_text",
//       services: "nav_text",
//       aboutus: "nav_text",
//       blog: "nav_text"
//     });
//     const data = event.target.name;
//     console.log(data);
//     this.setState({ ...this.state, data: "nav_hilighted" })
//   }
  

//   render() {
//     // useEffect(() => {
//     //   this.getEvents();
//     // }, [this.state.events])
//     // this.getEvents()

//     return (
//       <>
//         <Navigation data={this.state} toggleIsLogined={()=>{this.toggleIsLogined()}} toggleShow={()=>{this.setShowTrue()}} />
//         <LoginAndSignup show={this.state.show} setShowFalse={()=>{this.setShowFalse()}} />
//         <BrowserRouter>
//           <Routes>
//             {/* <LoginAndSignup show={this.state.show} setShowFalse={()=>{this.setShowFalse()}} /> */}
//             {/* <Route path='/' element={<LoginAndSignup show={this.state.show} setShowFalse={()=>{this.setShowFalse()}} />}/> */}
//             <Route index element={<><Home /><Card /><Design /></>}/>
//             <Route path='/Home' element={<><Home /><Card /><Design /></>}/>
//             <Route path='/Dashboard' element={<DashBoard/>}/>
//             <Route path='/CreateEvent' element={<CreateEventPage/>}/>
//             {/* <Route path='/SignIn' element={<Signin/>}/> */}
//             {/* <Route path='/SignInSignup' element={()=><LoginAndSignup show={this.state.show} setShowFalse={()=>{this.setShowFalse()}}/>}/> */}

//             {this.state.events.map((event)=>{
//               return(<Route path={`/${event.id}`} element={<Statusbar events={event}/>}/>)
//             })}
//           </Routes>
//         </BrowserRouter>

//         <Footer data={this.state.footerLinks}/>
//       </>
//     )
//   }



// }
