import React, { Component } from 'react'
import { AddFeatures } from './AddFeatures/AddFeatures'

import { AddSportsDetails } from './AddSportsDetails/AddSportsDetails'
import './CreateEvent.css'
import { NameSportsAndType } from './NameSportsAndTypes/NameSportsAndType'

export default class CreateEvent extends Component {
    render() {
        return (
            <div>
                <div className='createevent_background'></div>
                <div className='createevent_form col-6'>
                    <div className='createevent_cross'>
                        <img className='createevent_img_cross' src={require('./Images/cross.png')} alt='Cross' />
                    </div>
                    <div className='createevent_text'>Create Event</div>
                    <hr />
                    <div>
                        {/* <NameSportsAndType/> */}
                        {/* <AddFeatures/> */}
                        {/* <AddSportsDetails/> */}
                    </div>
                </div>
            </div>
        )
    }
}
