import './LoginAndSignup.css'
import React, { Component } from 'react'
import axios from 'axios';

export  class Signin extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        emailID:"",
        password:"",
        emailError:"",
        passError:"",
        redirect:false
      }
    }
    setValues(event){
        //Catching the Event Name form name tag
        const name=event.target.name;
        //Catching the target value form name tag
        const value=event.target.value;
        // console.log(name);
        //setting the value here in props
        this.setState({[name]:value});
    }
    // validateEmail(){
    //     const text=this.state.emailID;
    //     const email=/^[a-z A-Z 0-9]+[@][a-z]+[.][a-z]{2,3}$/
    //     console.log(email.test(text))
    //     if(email.test(text)){
    //         this.setState({...this.state,emailError:""})
    //     }
    //     else{
    //         this.setState({...this.state,emailError:"ls-error"})
    //     }
        
    // }
    submitHandler(){
        // if(this.state.emailID!=="" && this.state.password!=="" && this.state.emailError==="" && this.state.passError===""){
            axios.post("http://localhost:9000/post",{email:this.state.emailID,password:this.state.password})
            .then((res)=>console.log(res));
        // }
        // else{
        //     alert("Email or Password is Wrong")
        //     this.setState({
        //         emailID:"",
        //         password:"",
        //         emailError:"",
        //         passError:"",
        //         redirect:false
        //       });
        // }
    }
  render() {
    //use navigate for two options of naivgation
        /*
        like 
        if(this.state.navigate){
            return <Navigate to='/'/>
        }
        return (.....form);
        */
    return (
        <>
        <div>
            <div className=''>
                <input type='text' id='email' name='emailID' className={`ls-input-label`} placeholder='Email' value={this.state.username} onChange={(event)=>{this.setValues(event)}}/>
            </div>
            <div>
                <input type='password' id='password' name='password' className='ls-input-label' placeholder='Password' value={this.state.password} onChange={(event)=>{this.setValues(event)}}/>
            </div>
            <div>
                <button className='ls-login-button' onClick={()=>{this.submitHandler()}}>Sign In</button>
            </div>
        </div>

    </>
    )
  }
}
