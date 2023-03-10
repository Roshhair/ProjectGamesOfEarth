import React, { Component } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import http from '../axiosHandler'
import './PlayerRegistration.css'

export default class PlayerRegistration extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name:"",
        email:"",
        phone:"",
        age:"",
        agree:false,
        position:"select",
        redirect:true
      }
    }
    setValues(event) {
        //Catching the Event Name form name tag
        const name = event.target.name;
        //Catching the target value form name tag
        const value = event.target.value;
        // console.log(value)
        // console.log(name)
        // console.log()
        // console.log(name);
        //setting the value here in props
        this.setState({ [name]: value });
    }
    checkBoxHandler(event){
        const name = event.target.name;
        const value= event.target.checked;
        this.setState({[name]:value})
    }
    submitHandler(){
        if(this.state.agree){
            http.post(`/player-add/${this.props.id}`,{name:this.state.name,
            email:this.state.email,
            phone:this.state.phone,
            age:this.state.age,position:this.state.position}).then(res=>{
                if(res.status==200){
                    this.setState({...this.state,redirect:false})
                }
            })
            return;
        }
        alert("YOu Have Agree")
    }
    render() {
        return this.state.redirect?(
            <div className='player_registration'>
                <div className="col-5 player_registration_div">
                    <div className="player_registration_title">Player Registration</div>
                    <div className='player_registration_subtitle'>Event Name @ Sport</div>
                    <hr className='player_registration_hr'/>
                    <div className="">
                        <div className="player_registration_input_div">
                            <input type="text" className='player_registration_input' name='name' value={this.state.name} onChange={(event)=>{this.setValues(event)}} placeholder="Enter your Name " required />
                        </div>
                        <div className="player_registration_input_div">
                            <input type="text" className='player_registration_input' name='email' value={this.state.email} onChange={(event)=>{this.setValues(event)}} placeholder="Enter your Email " required />
                        </div>
                        <div className="player_registration_input_div">
                            <input type="number" className='player_registration_input' name='phone' value={this.state.phone} onChange={(event)=>{this.setValues(event)}} placeholder="Enter your Phone Number " required />
                        </div>
                        <div className="player_registration_input_div">
                            <input type="number" className='player_registration_input' name='age' value={this.state.age} onChange={(event)=>{this.setValues(event)}} placeholder="Enter your Age " required />
                        </div>
                        <div className='player_registration_input_div'>
                            <select className='player_registration_select' name='position' value={this.state.position} onChange={(event)=>{this.checkBoxHandler(event)}} >
                                <option disabled value='select'>Select Position</option>
                                <option value='Rushi'>Defender</option>
                                <option value='Rushi'>Striker</option>
                                <option value='Rushi'>MidFielder</option>
                                <option value='Rushi'>Goal Keeper</option>
                            </select>
                        </div>
                        <div className="player_registration_div_checkbox">
                            <input type="checkbox" className='player_registration_checkbox' name='agree' onChange={(event)=>{this.checkBoxHandler(event)}}/> <span className='player_registration_text'>I Agree</span>
                        </div>
                        <div className="player_registration_button_div">
                            <input className='player_registration_button' type="submit" onClick={()=>{this.submitHandler()}}/>
                        </div>
                    </div>
                </div>
            </div>
        ):<Navigate to='/Home'/>
    }
}
