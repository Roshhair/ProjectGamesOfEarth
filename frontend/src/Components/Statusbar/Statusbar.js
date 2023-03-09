import React from 'react'
import './Statusbar.css'

function Statusbar() {
  return (
    <div className='main_div_status'>
        <div className='status_div1'>
            Games Of Earth

        </div>
        <div className='status_div2'>
            <button className='status_button'>Details</button>
            <button className='status_button'>Players</button>
            <button className='status_button'>Bulk registration</button>
            <button className='status_button'>Manager control</button>
            <button className='status_button'>match maker</button>
            <button className='status_button'>match updater</button>
            <button className='status_button'>auction</button>
            <button className='status_button'>budget estimation</button>
            <button className='status_button'>expense tracker</button>
            <button className='status_button'>expense dashboard</button>
            <button className='status_button'>scoreboard</button>
        </div>
    
       
      
    </div>
  )
}

export default Statusbar
