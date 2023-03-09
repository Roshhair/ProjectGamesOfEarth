import React, { Component } from 'react'
import './EventDetails.css'

export default class EventDetails extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        playerfees:""
      }
    }
    setValues(event) {
        //Catching the Event Name form name tag
        const name = event.target.name;
        //Catching the target value form name tag
        const value = event.target.value;
        console.log(value)
        // console.log(name)
        // console.log()
        // console.log(name);
        //setting the value here in props
        this.setState({ [name]: value });
    }
    submitHandler(){
        console.log(this.state);
    }
    render() {
        return (
            <div className='event_details'>
                <div>
                    <div className='event_details_text'>Venue: Place</div>
                    <div className='event_details_text'>Sports : Football</div>
                    <div className='event_details_text'>From dateOne to dataTwo</div>
                </div>
                <hr/>
                <div>
                    <div><input className='event_details_input' type='number' name='playerfees' value={this.state.playerfees} onChange={(event)=>{this.setValues(event)}} placeholder='Player Registration Fees'/></div>
                    <div><button className='event_details_button'>Add</button></div>
                </div>
            </div>
        )
    }
}
