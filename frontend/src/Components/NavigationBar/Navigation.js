import React from 'react'
import './Navigation.css'
// import  img from './hamburgur.svg'

export const Navigation = (props) => {
    //Importing the array of the navlinks when not logined.....
    const navbarLinks = props.data.navbarLinks;
    //saving state of login
    const isLogined = props.data.isLogined
    //change state of login
    // const toggleIsLogined=props.toggleIsLogined

    //to show Login page
    const toggleShow = props.toggleShow;

    return (
        <>
            <div>
                <nav className='nav_innerdivnav'>
                    <div>
                        <ul className='nav_li'>
                            <li ><a href='/' className='nav_head nav_text_only'>GAMESOFEARTH</a></li>
                            <li className='nav_a'><button className='nav_li_button' onClick={toggleShow} >Login</button></li>

                            {!isLogined && navbarLinks.map((data) => {
                                return <li key={data.id}><a href={`/${data.name}`} className={data.css} >{data.name}</a></li>
                            })}
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
}
