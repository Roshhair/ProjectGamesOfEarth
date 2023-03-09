import React from 'react'
// import Card from '../Card/Card'
// import myimage from '../Images/ball.jpg'
import './Home.css'

function Home() {
  return (
    <div className='home_div'>
      <h1 className='home_title'> GAMES OF EARTH</h1>
      <div className='home_div2'>
      <button className='home_button float_left' >GET STARTED</button>
      <button className='home_button float_right'>TAKE A TOUR</button>
       </div>
       {/* <Card /> */}
    </div>
  )
}

export default Home
