import React, { Component } from 'react'
import { EventCard } from '../Events/EventCard'
import './EventCardBox.css'

export default class EventCardBox extends Component {
  render() {
    return (
    <div className='ECB_div'>
      {/* REd */}
      <EventCard/>
    </div>
    )
  }
}
