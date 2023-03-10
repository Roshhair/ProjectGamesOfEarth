import React, { Component } from 'react'
import { Signin } from './Signin'
import { Signup } from './Signup'
import './LoginAndSignup.css'
import { Navigate } from 'react-router-dom'


export default class LoginAndSignup extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLogged:true,
            isSignup:true
        }
    }
    setIsLogged(){
        this.setState({...this.state,isLogged:false})
    }
    render() {
        // console.log(this.props)

        return this.state.isLogged?(<>
                <div className='ls-background' onClick={()=>{this.setIsLogged()}}>
                </div>
                <div className='ls-form col-4' >
                    <div className='ls-cross' onClick={()=>{this.setIsLogged()}}>
                        <img className='ls-cross-image' src={require('../Images/cross.png')} alt='Cross' />
                    </div>
                    <div>
                        <ul className='ls-list clearfix'>
                            <li className='ls-list-items float-left'>
                            <button className='ls-topic-button' onClick={() => { this.setState({...this.state,isSignup: true }) }}>Sign In</button>
                            </li>
                            <li className='ls-list-items float-right'>
                            <button className='ls-topic-button' onClick={() => { this.setState({ ...this.state,isSignup: false }) }}>Sign Up</button>
                            </li>
                        </ul>
                    </div>
                    <hr />
                    {this.state.isSignup ? <Signin /> : <Signup />}
                </div>
            </>
            ):<Navigate to="/Home"/>
    }
}
