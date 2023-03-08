import React, { Component } from 'react'
import './MatchList.css'

export default class MatchList extends Component {
    //constructor and props then get list from db as per the event
  render() {
    return (
      <div className='match_list'>
        <div className='match_list_title'>Match List</div>
        <hr/>
        <div className='match_list_lister'>
            <div className='col-12'>
                <div className='col-3 match_list_lisert_title'>Team A  Vs Team B</div>
                <div className='col-3 match_list_lisert_title'>Score</div>
                <div className='col-3 match_list_lisert_title'>Time And Venue</div>
                <div className='col-3 match_list_lisert_title'>Update</div>
            </div>
            <div className='match_list_list'>
                <div className='match_list_match'>
                <div className='col-3 match_list_lisert_title'>Team A  Vs Team B</div>
                <div className='col-3 match_list_lisert_title'>Score</div>
                <div className='col-3 match_list_lisert_title'>Time</div>
                <div className='col-3 match_list_lisert_title'><a href='/' className='match_list_list_update'>Update</a></div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
