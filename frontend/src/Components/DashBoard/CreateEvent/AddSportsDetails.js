import React from 'react'
import './CreateEvent.css'

export const AddSportsDetails = () => {
    return (
        <>
            <div className='createevent_div col-12'>
                <div className='col-6 div_red createevent_div'>
                    {/* add the features here */}
                </div>
                <div className='col-6 div_red createevent_div'>
                    {/* add listing features here */}
                </div> 
            </div>
            <div className='div_red col-12 '>
                <ul className='createevent_margin_zero createevent_clearfix'>
                    <li className='createevent_list_items2 createevent_float_right'>
                        <button className='createevent_button'>Next</button>
                    </li>
                    <li className='createevent_list_items2 createevent_float_right'>
                        <button className='createevent_button'>Back</button>
                    </li>
                </ul>
            </div>
        </>
    )
}
