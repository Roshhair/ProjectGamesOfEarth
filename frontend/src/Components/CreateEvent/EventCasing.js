import React, { useEffect, useState } from 'react'
import CreateEventPage from './CreateEventPage'
import http from '../axiosHandler'

export const EventCasing = () => {
    const [sports,setSports]=useState([]);

    const fetchSports=()=>{
        http.get("/get-sports").then(res=>{
            console.log(res.data);
            setSports(res.data)
        })
    }
    const fetchEvents=()=>{
        http.get("/get-event-types").then(res=>{
            console.log(res.data);
            setEventTypes(res.data)
        })
    }
    const [eventTypes,setEventTypes]=useState([]);
    
    const [features,setFeatures]=useState([]);
    const fetchFeatures=()=>{
        http.get("/get-all-features").then(res=>{
            console.log(res.data);
            setFeatures(res.data)
        })
    }
    useEffect(()=>{
        fetchSports()
        // fetchEvents()
        // fetchFeatures()
    },[])
    useEffect(()=>{
        fetchEvents()
    },[])
    useEffect(()=>{
        fetchFeatures()
    },[])
  return (
    <>
        <CreateEventPage sports={sports} eventTypes={eventTypes} features={features} />
    </>
  )
}
