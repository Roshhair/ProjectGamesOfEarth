import React, { Component } from 'react'
import { EventCard } from '../Events/EventCard'
import './EventCardBox.css'

export default class EventCardBox extends Component {
  render() {
    return (
      <div>
        <div className='eventcardbox_div_color eventcardbox_clearfix'>
          <ul className='eventcardbox_list eventcardbox_clearfix'>
            <li className='eventcardbox_list_items  eventcardbox_div_color eventcardbox_float_left eventcardbox_margin_left'>
              <p className='eventcardbox_text'> Event Card Box</p>
            </li>
            <li className='eventcardbox_list_items eventcardbox_div_color eventcardbox_float_right eventcardbox_margin_right'>
              <button className='eventcardbox_addEvent'>Add Event</button>
            </li>
          </ul>

        </div>
        <div className='eventcardbox_div'>

          {/* REd */}
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </div>

    )
  }
}
