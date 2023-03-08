import React, { Component } from 'react'
import './PlayerRegistration.css'

export default class PlayerRegistration extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name:"",
        email:"",
        phone:"",
        age:"",
        agree:false
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
            console.log(this.state)
            return;
        }
        alert("YOu Have Agree")
    }
    render() {
        return (
            <div className='player_registration'>
                <div className="col-5 player_registration_div">
                    <div className="player_registration_title">Player Registration</div>
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
                        <div className="player_registration_div_checkbox">
                            <input type="checkbox" className='player_registration_checkbox' name='agree' onChange={(event)=>{this.checkBoxHandler(event)}}/> <span className='player_registration_text'>I Agree</span>
                        </div>
                        <div className="player_registration_button_div">
                            <input className='player_registration_button' type="submit" onClick={()=>{this.submitHandler()}}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
