import React, { Component } from 'react'
import './Dashboard.css'

export default class Dashboard extends Component {
  render() {
    return (
      <div className='dashboard'>
        <span><p>Welcome {"User"}</p></span>
        <div><button>Add Event</button></div>

      </div>
    )
  }
}
