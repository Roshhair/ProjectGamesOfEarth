import React, { Component } from 'react'
import http from '../axiosHandler';
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
        http.post(`/add-playersFees/${this.state.playerfees}`)
        .then(res=>{
            if(res.status==200){
                alert("Added");
            }
        })
    }
    render() {
        console.log(this.props.data)
        return (
            <div className='event_details'>
                <div>
                    <div className='event_details_text'>Venue: {this.props.data.venue}</div>
                    <div className='event_details_text'>Sports : {this.props.sport.name}</div>
                    <div className='event_details_text'>From {this.props.data.startDate} to {this.props.data.endDate}</div>
                </div>
                <hr/>
                <div>
                    <div><input className='event_details_input' type='number' name='playerfees' value={this.state.playerfees} onChange={(event)=>{this.setValues(event)}} placeholder='Player Registration Fees'/></div>
                    <div><button className='event_details_button' onClick={()=>{this.submitHandler()}}>Add</button></div>
                </div>
            </div>
        )
    }
}
