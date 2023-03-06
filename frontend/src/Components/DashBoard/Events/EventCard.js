import React from 'react'
import './EventCard.css'
export const EventCard = () => {
  return (
    <div className='eventcard_maindiv eventcard_col-3 eventcard_clearfix'>
      <a href='/home' className='eventcard_a'>
      <div className='eventcard_name eventcard_div_margin'>{"Event Name"}</div>
      <div className='eventcard_color_white eventcard_div_padding eventcard_div_color eventcard_div_margin eventcard_text'>Football</div>
      <div className='eventcard_color_white eventcard_div_padding eventcard_div_color eventcard_text eventcard_clearfix eventcard_div_margin'>
        <ul className='eventcard_list'>
          <li className='eventcard_list_items eventcard_float_left'>Start : {"12-12-12"}</li>
          <li className='eventcard_list_items eventcard_float_right'>End : {"12-12-12"}</li>
        </ul>
      </div>
      <div className='eventcard_color_white eventcard_div_padding eventcard_div_color  eventcard_clearfix eventcard_div_margin'>
        Venue : {"Pune"}
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
