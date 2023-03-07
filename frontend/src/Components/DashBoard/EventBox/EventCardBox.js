import React, { Component } from 'react'
import { EventCard } from '../Events/EventCard'
import './EventCardBox.css'

export default class EventCardBox extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
    }
  }
  render() {
    const events=this.props.events;
    return (
      <div>
        <div className='eventcardbox_div_color eventcardbox_clearfix'>
          <ul className='eventcardbox_list eventcardbox_clearfix'>
            <li className='eventcardbox_list_items  eventcardbox_div_color eventcardbox_float_left eventcardbox_margin_left'>
              <p className='eventcardbox_text'> Event Card Box</p>
            </li>
            <li className='eventcardbox_list_items eventcardbox_div_color eventcardbox_float_right eventcardbox_margin_right'>
              <button className='eventcardbox_addEvent' onClick={this.props.setCreateEventTrue}>Add Event</button>
            </li>
          </ul>

        </div>
        <div className='eventcardbox_div'>

          {/* REd */} 
          {events.map((event)=>{
            return <EventCard key={event.eventName} event={event}/>
          })}
          
        </div>
      </div>

    )
  }
}
