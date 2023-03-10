import React from 'react'
import './EventCard.css'
export const EventCard = (props) => {
  const event=props.event;
  // console.log(event)
  return (
    <div className='eventcard_maindiv eventcard_col-3 eventcard_clearfix'>
      <a href='/Home' className='eventcard_a'>
      <div className='eventcard_name eventcard_div_margin'>{event.eventName}</div>
      <div className='eventcard_color_white eventcard_div_padding eventcard_div_color eventcard_div_margin eventcard_text'>{event.sports}</div>
      <div className='eventcard_color_white eventcard_div_padding eventcard_div_color eventcard_text clearfix eventcard_div_margin'>
        <ul className='eventcard_list'>
          <li className='eventcard_list_items eventcard_float_left'>Start : {event.start}</li>
          <li className='eventcard_list_items eventcard_float_right'>End : {event.end}</li>
        </ul>
      </div>
      <div className='eventcard_color_white eventcard_div_padding  eventcard_text eventcard_div_color clearfix eventcard_div_margin'>
        Venue : {event.venue}
      </div>
      <div className='eventcard_div_margin'>
        {/* <ul className='eventcard_list'>
          <li className='eventcard_list_items eventcard_float_left eventcard_text eventcard_margin_left'><button className='eventcard_buttons'>Delete</button></li>
          <li className='eventcard_list_items eventcard_float_right eventcard_margin_right'><button className='eventcard_buttons'>Edit</button></li>
        </ul> */}
      </div>
      </a>
      
    </div>
  )
}
