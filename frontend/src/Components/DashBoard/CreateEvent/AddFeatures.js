import React from 'react'
import './CreateEvent.css'

export const AddFeatures = () => {
    return (
        <>
            <div className='createevent_div col-12'>
                <div className='createevent_div_list'>
                    <div className='createevent_title_features'>Add Features</div>
                    <ul className='createevent_list_features '>
                        <li className='createevent_list_items'>
                            <input type='checkbox' name='eventType' className='createevent_radio' /><span className='createevent_list_span'>Player Registration</span>
                        </li>
                        <li className='createevent_list_items'>
                            <input type='checkbox' name='eventType' className='createevent_radio' /><span className='createevent_list_span'>Fee Collection And Confirmation</span>
                        </li>
                        <li className='createevent_list_items'>
                            <input type='checkbox' name='eventType' className='createevent_radio' /><span className='createevent_list_span'>Expanse Manager</span>
                        </li>
                        <li className='createevent_list_items'>
                            <input type='checkbox' name='eventType' className='createevent_radio' /><span className='createevent_list_span'>Auction Features</span>
                        </li>
                        <li className='createevent_list_items'>
                            <input type='checkbox' name='eventType' className='createevent_radio' /><span className='createevent_list_span'>Manager Management</span>
                        </li>
                    </ul>
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
