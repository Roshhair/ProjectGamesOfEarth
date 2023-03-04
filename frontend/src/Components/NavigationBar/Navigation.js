import React from 'react'
import './Navigation.css'

export const Navigation = (props) => {
    // const {home,services,aboutus,blog}=props
    return (
        <>
            <nav className='innerdivnav'>
                <div>
                    {/* <p className='text'>GAMESOFEARTH</p> */}
                    <ul className='nav_li'>
                        <li ><a href='/' className='nav_head text_only'>GAMESOFEARTH</a></li>
                        <li className='nav_text'><button className=''>Login</button></li>
                        <li ><a href='/'className='nav_text text_only' >About Us</a></li>
                        <li ><a href='/' className='nav_text text_only' >Blog</a></li>
                        <li ><a href='/'  className='nav_text text_only'>Services</a></li>
                        <li ><a href='/' className='nav_text text_only'>Home</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
