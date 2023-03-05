import React from 'react'

export const Signup = () => {
    return (
        <>
            <div>
                <div>
                    <label htmlFor='email' className='label-text'>Name :</label><br />
                    <input type='text' id='email' name='emailID' className='input-label' placeholder='Please Enter Your Name' />
                </div>
                <br />
                <div>
                    <label htmlFor='email' className='label-text'>Email :</label><br />
                    <input type='text' id='email' name='emailID' className='input-label' placeholder='Please Enter Your Email' />
                </div>
                <br />
                <div>
                    <label htmlFor='password' className='label-text'>Password:</label><br />
                    <input type='password' id='password' name='password' className='input-label' placeholder='Please Enter Password' />
                </div>
                <br />
                <div>
                    <label htmlFor='password' className='label-text'>Conform Password:</label><br />
                    <input type='password' id='password' name='password' className='input-label' placeholder='Enter Password Again' />
                </div>
                <div>
                    <button className='login-button'>Sign Up</button>
                </div>
            </div>
        </>
    )
}
