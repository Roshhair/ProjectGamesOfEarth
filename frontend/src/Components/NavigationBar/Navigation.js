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
                <nav className='innerdivnav'>
                    <div>
                        <ul className='nav_li'>
                            <li ><a href='/' className='nav_head text_only'>GAMESOFEARTH</a></li>
                            <li className='nav_text'><button onClick={toggleShow} >Login</button></li>

                            {!isLogined && navbarLinks.map((data) => {
                                return <li key={data.id}><a href='/' className={data.css} >{data.name}</a></li>
                            })}
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
}
