import React, { Component } from 'react'

import './DashBoard.css'
import EventCardBox from './EventBox/EventCardBox'

export default class DashBoard extends Component {
  render() {
    return (
      <div className='dashboard'>
        <p className='dash_headder'>Welcome {"Users"}</p>
        <hr className='dash_line'/>
        <EventCardBox/>
      </div>
    )
  }
}
