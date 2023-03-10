import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';
import http from '../axiosHandler';
import './Navigation.css'
// import  img from './hamburgur.svg'

export const Navigation = (props) => {
    //Importing the array of the navlinks when not logined.....
    const navbarLinks = props.data.navbarLinks;
      const [navigateTo,setNavigateTo]=useState(<Navigate to="/SignUpOrLogin"/>)
      const [isLogged,setIsLogged]=useState(false);
    const [login,setLogin]=useState(true);
    const fetchisLoggedin=()=>{
        http.get("/isLogged").then(res=>{setIsLogged(res.data) ;console.log(res.data)})
      }
      useEffect(()=>{
        fetchisLoggedin()
      },[isLogged]);
    // console.log(isLogged)
    const logout=()=>{
        http.get("/log-out").then(res=>{
            setNavigateTo(<Navigate to="/Home"/>)
            setLogin(false)
        })
    }

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
                            <li className='nav_a'>{!isLogged?<button  className='nav_li_button' onClick={()=>{setLogin(false)}}>Login</button>:<button  className='nav_li_button' onClick={()=>{logout()}}>Logout</button>}</li>

                            {navbarLinks.map((data) => {
                                return <li key={data}><a href={`/${data}`} className='nav_a nav_text_only nav_li_a_text' >{data}</a></li>
                            })}
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    ):navigateTo
}
