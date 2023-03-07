import React, { Component } from 'react'
import CreateEvent from './CreateEvent/CreateEvent'

import './DashBoard.css'
import EventCardBox from './EventBox/EventCardBox'

export default class DashBoard extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      createEvent:false,
      events:[
        {
          eventName:"FootBall",
          sports:"Football",
          start:'12/12/2000',
          end:'12/1/2001',
          venue:'Pune'
        },
        {
          eventName:"Cricket",
          sports:"Cricket",
          start:'12/12/2000',
          end:'12/1/2001',
          venue:'Kothrud'
        }
      ]
    }
  }
    setCreateEventTrue(){
      this.setState({...this.state,createEvent:true})
    }
    setCreateEventFalse(){
      this.setState({...this.state,createEvent:false})
    }
    addAnEvent(eventONe){
      this.setState({...this.state,events:[...this.state.events,]})
    }

  render() {
    return (
      <>
      <div className='dashboard'>
        <p className='dash_headder'>Welcome {"Users"}</p>
        <hr className='dash_line'/>
        
        <EventCardBox events={this.state.events} setCreateEventTrue={()=>{this.setCreateEventTrue()}}/>
      </div>
      {this.state.createEvent && <CreateEvent setCreateEventFalse={()=>{this.setCreateEventFalse()}}/>}
      </>
      
    )
  }
}
