import React, { Component } from 'react'
import './CreateEvent.css'
import { NameSportsAndType } from './NameSportsAndType'

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
                        <NameSportsAndType/>
                    </div>
                </div>
            </div>
        )
    }
}
