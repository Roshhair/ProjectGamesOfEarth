import React from 'react'
import './CreateEvent.css'

export const NameSportsAndType = () => {
    return (
        <>
            <div className='createevent_div col-6'>
                <div>
                    <input type='text' placeholder='Event Name' className='createevent_input' />
                </div>
                <div>
                    <select className='createevent_input_select'>
                        <option className='createevent_input_options' selected disabled>Select Sport</option>
                        <option className='createevent_input_options'>Rushui</option>
                    </select>
                </div>
                <div >
                    <label className='createevent_label' htmlFor='startdate'>Start Date</label>
                    <input className='createevent_input' id='startdate' type='date'/>
                </div>
            </div>
            <div className='createevent_div col-6'>
                <div>
                    <div className='createevent_list_span'>Event Type</div>
                    <ul className='createevent_list '>
                        <li className='createevent_list_items'>
                            <input type='radio' name='eventType' className='createevent_radio'/><span className='createevent_list_span'>Simple</span>
                        </li>
                        <li className='createevent_list_items'>
                            <input type='radio'  name='eventType' className='createevent_radio'/><span className='createevent_list_span'>Auction</span>
                        </li>
                        <li className='createevent_list_items'>
                            <input type='radio'  name='eventType' className='createevent_radio'/><span className='createevent_list_span'>Tournament</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <label className='createevent_label' htmlFor='enddate'>End Date</label>
                    <input className='createevent_input' id='enddate' type='date' />
                </div>
                <div>
                    <ul>
                        <li>
                            <button>Cancel</button>
                        </li>
                        <li>
                            <button>Next</button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
