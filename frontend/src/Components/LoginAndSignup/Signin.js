import React from 'react'
import Modal from 'react-overlays/Modal'
import './LoginAndSignup.css'

export const Signin = (props) => {
    const show = props.show;
    const setShowFalse = props.setShow;
    return (
        <>
            <div>
                <div>
                    <label htmlFor='email' className='label-text'>Email :</label><br />
                    <input type='text' id='email' name='emailID' className='input-label' placeholder='Please Enter Your Email' />
                </div>
                <br />
                <div>
                    <label htmlFor='password' className='label-text'>Password:</label><br />
                    <input type='password' id='password' name='password' className='input-label' placeholder='Please Enter Your Password' />
                </div>
                <div>
                    <button className='login-button'>Sign In</button>
                </div>
            </div>

        </>
    )
}
