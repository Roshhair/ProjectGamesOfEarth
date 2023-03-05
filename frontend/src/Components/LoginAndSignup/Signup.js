import React from 'react'

export const Signup = () => {
    return (
        <>
            <div>
                <div>
                    <input type='text' id='email' name='emailID' className='ls-input-label' placeholder='Your Name' />
                </div>
                <div>
                    <input type='text' id='email' name='emailID' className='ls-input-label' placeholder='Your Email' />
                </div>
                <div>
                    <input type='password' id='password' name='password' className='ls-input-label' placeholder='Password' />
                </div>
                <div>
                    <input type='password' id='password' name='password' className='ls-input-label' placeholder='Confirm Password' />
                </div>
                <div>
                    <button className='ls-login-button'>Sign Up</button>
                </div>
            </div>
        </>
    )
}
