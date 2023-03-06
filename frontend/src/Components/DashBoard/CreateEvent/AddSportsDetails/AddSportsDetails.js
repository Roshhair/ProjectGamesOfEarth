import React from 'react'
import './AddSportsDetails.css'

export const AddSportsDetails = () => {
    return (
        <>
            <div className='add_sports_details_div col-12'>
                <div className='col-6 div_red add_sports_details_div'>
                    {/* add the features here */}
                    <div>
                        <input type='text' placeholder='Number of Teams' className='add_sports_details_input' />
                    </div>
                    <div>
                        <input type='text' placeholder='Players per Team' className='add_sports_details_input' />
                    </div>
                    <div>
                       <select className='add_sports_details_input_select'>
                        <option className='add_sports_details_input_options' selected disabled>Select Format</option>
                        <option className='add_sports_details_input_options'>League</option>
                        <option className='add_sports_details_input_options'>Groups + Knockout</option>
                        <option className='add_sports_details_input_options'>Knockout</option>
                        <option className='add_sports_details_input_options'>League + Knockout</option>
                       </select>
                    </div>
                    <div>
                        <input type='text' placeholder='Rounds/legs' className='add_sports_details_input' />
                    </div>
                </div>
                <div className='col-6 div_red add_sports_details_div'>
                    {/* add listing features here */}
                    <div className='add_sports_details_teamsname_cotainer'>

                    </div>
                </div> 
            </div>
            <div className='div_red col-12 '>
                <ul className='add_sports_details_margin_zero add_sports_details_clearfix'>
                    <li className='add_sports_details_list_items2 add_sports_details_float_right'>
                        <button className='add_sports_details_button'>Submit</button>
                    </li>
                    <li className='add_sports_details_list_items2 add_sports_details_float_right'>
                        <button className='add_sports_details_button'>Back</button>
                    </li>
                </ul>
            </div>
        </>
    )
}
