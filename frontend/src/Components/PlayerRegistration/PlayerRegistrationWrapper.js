import React from 'react'
import { useParams } from 'react-router-dom'
import PlayerRegistration from './PlayerRegistration'

export const PlayerRegistrationWrapper = () => {
    const urlData=useParams();  
  return (
    <div>
        <PlayerRegistration id={urlData.id}/>
    </div>
  )
}
