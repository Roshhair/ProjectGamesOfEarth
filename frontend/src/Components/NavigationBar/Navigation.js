import React from 'react'
import './Navigation.css'
// import  img from './hamburgur.svg'

export const Navigation = (props) => {
    const data=["About Us","Blog","Services","Home"];
    // const {home,services,aboutus,blog}=props
    return (
        <>
            <nav className='innerdivnav'>
                <div>
                    <ul className='nav_li'>
                        <li ><a href='/' className='nav_head text_only'>GAMESOFEARTH</a></li>
                        <li className='nav_text'><button className=''>Login</button></li>
                        {data.map((data)=>{
                            return <li ><a href='/' className='nav_text text_only' >{data}</a></li>
                        })}
                    </ul>
                </div>
            </nav>
        </>
    )
}
