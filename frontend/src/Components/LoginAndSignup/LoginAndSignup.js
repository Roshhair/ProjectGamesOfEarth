import React, { Component } from 'react'
import {Signin} from './Signin'
import {Signup} from './Signup'
import './LoginAndSignup.css'

export default class LoginAndSignup extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isSignup:true
        }
    }

    render() {

        return (
            <div className='background'>
                {/* <div className='col-3'></div> */}
                {/* <hr className=''/> */}
                <div className='cross'></div>
                <div className='col-3 form '>
                    <div>
                        <button className='topicbutton' onClick={()=>{this.setState({isSignup:true})}}>Sign In</button>
                        <button className='topicbutton'  onClick={()=>{this.setState({isSignup:false})}}>Sign Up</button>
                    </div>
                    {/* <br/> */}
                    <hr />
                    {this.state.isSignup?<Signin/>:<Signup/>}
                



                </div>
                {/* <div className='col-3' ></div> */}
            </div>
        )
    }
}
