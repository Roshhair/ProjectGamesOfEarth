import React, { Component } from 'react'
import { AddFeatures } from './AddFeatures/AddFeatures'
import { AddSportsDetails } from './AddSportsDetails/AddSportsDetails'
import './CreateEvent.css'
import { NameSportsAndType } from './NameSportsAndTypes/NameSportsAndType'

export default class CreateEvent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        isNameSportsAndTypes:true,
        isAddFeatures:false,
        isAddSportsDetails:false,
        eventName:"",
        eventType:'',
        
      }
    }
    render() {
        return (
            <div>
                <div className='createevent_background' onClick={this.props.setCreateEventFalse}></div>
                <div className='createevent_form col-6'>
                    <div className='createevent_cross'>
                        <img className='createevent_img_cross' onClick={this.props.setCreateEventFalse} src={require('./Images/cross.png')} alt='Cross' />
                    </div>
                    <div className='createevent_text'>Create Event</div>
                    <hr />
                    <div className='createevent_clearfix div_red'>
                        <NameSportsAndType/>
                        <AddFeatures/>
                        <AddSportsDetails/>
                    </div>
                </div>
            </div>
        )
    }
}
