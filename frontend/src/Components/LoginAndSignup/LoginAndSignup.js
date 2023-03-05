import React, { Component } from 'react'
import { Signin } from './Signin'
import { Signup } from './Signup'
import './LoginAndSignup.css'


export default class LoginAndSignup extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isSignup: true
        }
    }

    render() {
        // console.log(this.props)

        return this.props.show &&
            (<>
                <div className='ls-background' onClick={this.props.setShowFalse}>
                </div>
                <div className='ls-form col-4' >
                    <span className='ls-cross' onClick={this.props.setShowFalse}>
                        <img className='ls-cross-image' src={require('../Images/cross.png')} alt='Cross' />
                    </span>
                    <br />
                    <div>
                        <ul className='ls-list clearfix'>
                            <li className='ls-list-items float-left'>
                            <button className='ls-topic-button' onClick={() => { this.setState({ isSignup: true }) }}>Sign In</button>
                            </li>
                            <li className='ls-list-items float-right'>
                            <button className='ls-topic-button' onClick={() => { this.setState({ isSignup: false }) }}>Sign Up</button>
                            </li>
                        </ul>
                    </div>
                    <hr />
                    {this.state.isSignup ? <Signin /> : <Signup />}
                </div>
            </>


            );
    }
}
