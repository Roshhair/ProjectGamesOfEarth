

import React, { Component } from 'react'

export class Signup extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            emailID: "",
            password: "",
            confPassword: "",
            navigate:false
        }
    }
    setValues(event) {
        //Catching the Event Name form name tag
        const name = event.target.name;
        //Catching the target value form name tag
        const value = event.target.value;
        // console.log(name);
        //setting the value here in props
        this.setState({ [name]: value });
    }
    confirmPass() {
        if (this.state.password === this.state.confPassword) {
            console.log("cnf")
        }
        else {
            console.log("not cnf")
        }
    }
    validateEmail() {
        const text = this.state.emailID;
        const email = /^[a-z A-Z 0-9]+[@][a-z]+[.][a-z]{2,3}$/
        // console.log(email.test(text))
        if (email.test(text)) {
            console.log("cnf")
            // this.setState({...this.state,emailError:""})
        }
        else {
            console.log("Not cnf")
            // this.setState({...this.state,emailError:"ls-error"})
        }

    }

    submitHandler(event) {
        event.preventDefault();
        //check the conditions of incorrect
        //the axios
        //then set navagte true
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
                    <form onSubmit={(event)=>{this.submitHandler(event)}}>
                        <div>
                            <input type='text' name='name' className='ls-input-label' placeholder='Your Name' value={this.state.name} onChange={(event) => { this.setValues(event) }} />
                        </div>
                        <div>
                            <input type='text' name='emailID' className='ls-input-label' placeholder='Your Email' value={this.state.emailID} onChange={(event) => { this.setValues(event) }} onKeyUp={() => { this.validateEmail() }} />
                        </div>
                        <div>
                            <input type='password' id='password' name='password' className='ls-input-label' placeholder='Password' value={this.state.password} onChange={(event) => { this.setValues(event) }} />
                        </div>
                        <div>
                            <input type='password' name='confPassword' className='ls-input-label' placeholder='Confirm Password' value={this.state.confPassword} onChange={(event) => { this.setValues(event); }} onKeyUp={() => { this.confirmPass() }} />
                        </div>
                        <div>
                            <button type='submit' className='ls-login-button' onClick={() => { this.submitHandler() }}>Sign Up</button>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}


