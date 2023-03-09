import React from 'react'
import './Card.css'
import myimage from '../Images/feature3.png'
import myimage1 from '../Images/feature 1.jpg'
import myimage2 from '../Images/feature2.jpg'
import myimage3 from '../Images/img4.jpg'

function Card(props) {
  return (
    <>
    {/* <div>
      Middle
    </div> */}
      <div className="cards_div row">
        <div className='awe_div'>AWESOME FEATURES!!</div>
        <div className='column' >
          {props.cond ?<img className='card_img' src={myimage2} alt='not showing' />: null}
          <h2 style={{ color: 'white' }}>Conduct Live Auction</h2>
        </div>
        <div className='column'>
          <img className='card_img' src={myimage3} alt='not showing' />
          <h2 style={{ color: 'white'  }}>Manager mode</h2>
        </div>
        <div className='column'>
          <img className='card_img' src={myimage1} alt='not showing' />
          <h2 style={{ color: 'white' }}>Tournament features</h2>
        </div>
        <div className='column'>
          <img className='card_img' src={myimage} alt='not showing' />
          <h2 style={{ color: 'white' }}>Live Score Board</h2>
        </div>
        

      </div>
      
    
    </>
  //  <div className='cards_div'>
  //           <img className='img' src= {myimage} alt='not showing'/>
  //           </div>   
  )
}

export default Card
