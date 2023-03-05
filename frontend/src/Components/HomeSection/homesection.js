import React from 'react'
import './homesection.css';

function HomeSection() {
        return (
          <div className='home-container'>
            <video src='/video/video.mp4' autoPlay loop muted />
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
  