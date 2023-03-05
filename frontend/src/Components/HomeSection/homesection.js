import React from 'react'
import './homesection.css';

function HomeSection() {
        return (
          <div className='home-container'>
            <img src='/video/ball-2680595_1280.jpg' />
            <h1>GAMES OF EARTH</h1>
            <div >
               <button className='btn' >
                GET STARTED
              </button> 
              <button className='btn'>
                TAKE A TOUR
              </button>
            </div>
          </div>
        );
      }
      export default HomeSection;
  