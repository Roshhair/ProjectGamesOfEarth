import React, { Component } from 'react'
import './UpdateMatch.css'

export default class UpdateMatch extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        players:[],
        teamA:{},
        teamB:{},
        playerWithGoal:[]
      }
    }

    render() {
        return (
            <div className='update_match clearfix'>
                <div className='update_match_title'>Team A Vs Team B</div>
                <hr/>
                <div className='col-12'>
                    <div className='col-6 red_div update_match_inline float_left update_match_padding'>
                        <div className='clearfix'>
                        <div className='col-6 float_left update_match_inline red_div update_match_goal'>
                            <div className='update_match_teams'>Team A</div>
                            <div><div className='update_match_score'>0</div></div>
                        </div>
                        <div className='col-6 update_match_inline float-right red_div update_match_goal'>
                            <div className='update_match_teams'>Team B</div>
                            <div><div className='update_match_score'>0</div></div>
                        </div>
                        </div>
                        <div className='col-12 '>
                        <div className='col-6 update_match_inline'>
                            <select className='update_match_select' value='select'>
                                <option disabled value='select'>Select Team</option>
                                <option>Team A</option>
                                <option>Team B</option>
                            </select>
                        </div>
                        <div className='col-6 update_match_inline'>
                            <select className='update_match_select' value='select'>
                                <option disabled value='select'>Select Player</option>
                                {/* <option >Rushikesh</option> */}
                            </select>
                        </div>
                        <div className='update_match_text_mid'><button className='update_match_button'>Add</button></div>
                        </div>
                    </div>
                    <div className='col-6 update_match_inline update_match_padding float_right'>
                        <div className='update_match_players_list'>
                            <div className='update_match_player clearfix'>
                                <div className='col-6 update_match_goal update_match_inline float_left'>
                                    Player Name
                                </div>
                                <div className='col-6 update_match_goal update_match_inline float_right'>
                                    Goals
                                </div>
                            </div>
                            <div className='update_match_player clearfix'>
                                <div className='col-6 update_match_goal update_match_inline float_left'>
                                    Rushikesh
                                </div>
                                <div className='col-6 update_match_goal update_match_inline float_right'>
                                    1
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
