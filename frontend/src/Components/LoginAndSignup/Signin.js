import React from 'react'
import './LoginAndSignup.css'

export const Signin = (props) => {
    return (
        <>
            <div>
                <div>
                    <input type='text' id='email' name='emailID' className='ls-input-label' placeholder='Email' />
                </div>
                <div>
                    <input type='password' id='password' name='password' className='ls-input-label' placeholder='Password' />
                </div>
                <div>
                    <button className='ls-login-button'>Sign In</button>
                </div>
            </div>

        </>
    )
}
