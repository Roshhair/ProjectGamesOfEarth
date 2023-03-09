import './Auction.css'

import React, { Component } from 'react'

export default class Auction extends Component {
    render() {
        return (
            <div className='auction'>
                <div >
                    <div className='auction_title'>Player Details</div>
                    <hr />
                    <div>
                        <div className='auction_player_card col-4'>
                            <div>Player Name : Rushi</div>
                            <div>Player Position : player</div>
                            <div>Player Base : 1000</div>
                        </div>
                    </div>
                    <hr/>
                    <div className=''>
                        <div className=''><input type='number' className='auction_input' placeholder='Player Id'/></div>
                        <div className=''><button className='auction_button'>Search</button></div>
                    </div>
                </div>
                <hr />
                <div>
                    <div className='auction_title'>Manager Details</div>
                    <hr />
                    <div className='auction_managers_list'>
                        <div className='col-4 inline_display'>Manager Name</div>
                        <div className='col-4 inline_display'>Total Spending</div>
                        <div className='col-4 inline_display'>Total Remaining</div>
                    </div>
                </div>
            </div>
        )
    }
}
