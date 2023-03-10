
import React, { useEffect, useState } from 'react'
import http from "../axiosHandler"
import './DashBoard.css'
import EventCardBox from './EventBox/EventCardBox'

 const DashBoard = () => {
  const[events,setEvents]=useState([]);
  const eventsFetcher=()=>{
  http.get("/get-user-events").then(res=>{
    if(res.data.lenght>0){
      setEvents(res.data);
    }
    
  })
  }
  useEffect(()=>{
    eventsFetcher()
  },[])
  return (
    <>
      <div className='dashboard'>
        <p className='dash_headder'>Welcome {"Users"}</p>
        <hr className='dash_line'/>
        <EventCardBox events={events}/>
      </div>
      </>
  )
}
export default DashBoard