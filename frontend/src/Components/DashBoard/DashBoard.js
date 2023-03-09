import React, { Component } from 'react'
// import CreateEvent from './CreateEvent/CreateEvent'

import './DashBoard.css'
import EventCardBox from './EventBox/EventCardBox'

export default class DashBoard extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      isAddEvent:false,
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

  render() {
    return (
      <>
      <div className='dashboard'>
        <p className='dash_headder'>Welcome {"Users"}</p>
        <hr className='dash_line'/>
        {this.state.isAddEvent?"data":<EventCardBox events={this.state.events}/>}
      </div>
      </>
      
    )
  }
}
