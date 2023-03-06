import React from 'react'
import './AddFeatures.css'

export const AddFeatures = () => {
    return (
        <>
            <div className='add_features_div col-12'>
                <div className='add_features_div_list'>
                    <div className='add_features_title_features'>Add Features</div>
                    <ul className='add_features_list_features '>
                        <li className='add_features_list_items'>
                            <input type='checkbox' name='eventType' className='add_features_radio' /><span className='add_features_list_span'>Player Registration</span>
                        </li>
                        <li className='add_features_list_items'>
                            <input type='checkbox' name='eventType' className='add_features_radio' /><span className='add_features_list_span'>Fee Collection And Confirmation</span>
                        </li>
                        <li className='add_features_list_items'>
                            <input type='checkbox' name='eventType' className='add_features_radio' /><span className='add_features_list_span'>Expanse Manager</span>
                        </li>
                        <li className='add_features_list_items'>
                            <input type='checkbox' name='eventType' className='add_features_radio' /><span className='add_features_list_span'>Auction Features</span>
                        </li>
                        <li className='add_features_list_items'>
                            <input type='checkbox' name='eventType' className='add_features_radio' /><span className='add_features_list_span'>Manager Management</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='div_red col-12 '>
                <ul className='add_features_margin_zero add_features_clearfix'>
                    <li className='add_features_list_items2 add_features_float_right'>
                        <button className='add_features_button'>Next</button>
                    </li>
                    <li className='add_features_list_items2 add_features_float_right'>
                        <button className='add_features_button'>Back</button>
                    </li>
                </ul>
            </div>
        </>
    )
}
