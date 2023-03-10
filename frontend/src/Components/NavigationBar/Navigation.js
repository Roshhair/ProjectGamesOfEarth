import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import './Navigation.css'
// import  img from './hamburgur.svg'

export const Navigation = (props) => {
    //Importing the array of the navlinks when not logined.....
    const navbarLinks = props.data.navbarLinks;
    const [login,setLogin]=useState(true);

    //saving state of login
    // const isLogined = props.data.isLogined
    //change state of login
    // const toggleIsLogined=props.toggleIsLogined

    //to show Login page
    // const toggleShow = props.toggleShow;

    return login?(
        <>
            <div>
                <nav className='nav_innerdivnav'>
                    <div>
                        <ul className='nav_li'>
                            <li ><a href='/' className='nav_head nav_text_only'>GAMESOFEARTH</a></li>
                            <li className='nav_a'><button  className='nav_li_button' onClick={()=>{setLogin(false)}}>Login</button></li>

                            {navbarLinks.map((data) => {
                                return <li key={data}><a href={`/${data}`} className='nav_a nav_text_only nav_li_a_text' >{data}</a></li>
                            })}
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    ):<Navigate to="/SignUpOrLogin"/>
}
