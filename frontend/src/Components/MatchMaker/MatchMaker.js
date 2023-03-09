import { buildTimeValue } from '@testing-library/user-event/dist/utils'
import React from 'react'
import './MatchMaker.css'

function MatchMaker() {
    return (
        <div className='container'>
            <div className='legs_div'>Enter no of Legs/Round
                <input className='legs_text' name="legs" type={Text}></input>
            </div>
            <div className='total_div'>Total no of Matches
                <input className='total_text' type={Text}></input>
            </div>
            <div className='create_match' name="creatematch">Create Match
            </div>
            <div className='match'>
                <select name="team1" id="team1" style={{ marginRight: "4vw", width: "18vw", textAlign: "center" }}>
                    <option value="volvo">TeamA</option>
                    <option value="saab">TeamB</option>
                </select>
                VS
                <select name="team2" style={{ marginLeft: "4vw", width: "18vw", textAlign: "center" }} id="team2">
                    <option value="volvo">TeamB</option>
                    <option value="saab">TeamA</option>
                </select>
                <div className='date_match'>
                    <label for="date">Date</label>
                    <input type="date" style={{ marginLeft: "2%", fontSize: "x-large", width: "16vw" }}></input>
                </div>
                <div className='time'>
                    <label for="time">Select a time</label>
                    <input type="time" id="time" name="time" style={{ fontSize: "x-large", width: "10.7vw", marginLeft: "2%" }}></input>
                </div>
                <div className='venue'>
                    <label for="venue">Venue</label>
                    <input type="venue" id="venue" name="venue" style={{ fontSize: "large", width: "15vw", marginLeft: "2%" }}></input>
                </div>
                <div className='buttons_div'>
                    <button className='button' style={{ fontSize: "1.5vw" }} type={'button'}>Save</button>
                    <button className='button' style={{ fontSize: "1.5vw", marginLeft: "2vw" }} type={'button'}>Clear</button>
                </div>
            </div>
            <div className='create_match' name="matchescreated">Matches Created</div>
            <div style={{ textAlign: "center", backgroundColor: "#acabab", fontSize: "x-large" }}> Matches</div>

            <div className='col-12'>
                    <div className='matches_view'>
                        <div className=' man_auc_innerdiv text_center clearfix'>
                            <div className='col-13 inline_display'>
                                Match
                            </div>
                            <div className='col-13 inline_display'>
                                Date
                            </div>
                            <div className='col-13 inline_display'>
                                Time 
                            </div>
                            <div className='col-13 inline_display'>
                                Venue
                            </div>
                        </div>
                        <div className='text_center clearfix'>
                            <div className='col-13  inline_display'>
                                manchester united vs manchester city
                            </div>
                            <div className='col-13 inline_display'>
                                10 february 2023
                            </div>
                            <div className='col-13 inline_display'>
                                10 30 pm ist
                            </div>
                            <div className='col-13 inline_display'>
                                Old Trafford
                            </div>
                            <div className='col-13 inline_display'>
                                <button className='delete_button'>Delete
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
    )
}

export default MatchMaker
