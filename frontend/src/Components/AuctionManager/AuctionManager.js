import React, { Component } from 'react'
import './AuctionManager.css'

export default class AuctionManager extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        playerId:"",
        basePrice:"",
        soldPrice:"",
        isSold:"",
      }
    }
    //axios code for players List
    setValues(event) {
        //Catching the Event Name form name tag
        const name = event.target.name;
        //Catching the target value form name tag
        const value = event.target.value;
        console.log(value)
        // console.log(name)
        // console.log()
        // console.log(name);
        //setting the value here in props
        this.setState({ [name]: value });
    }
    submitHandler(){
        //axios code here
    }
    render() {
        return (
            <div className='auction_manager clearfix'>
                <div className='col-6 inline_display auction_manager_column float_left'>
                    <div className='auction_manager_title'>Add Players Sold Price</div>
                    <hr />
                    <div>
                        <div><input type='number' className='auction_manager_input' name='playerId' placeholder='Player ID' value={this.state.playerId} onChange={(event)=>{this.setValues(event)}}/></div>
                        <div><input type='number' className='auction_manager_input' name='basePrice' placeholder='Input Base Price' value={this.state.basePrice} onChange={(event)=>{this.setValues(event)}}/></div>
                        <div><input type='number' className='auction_manager_input' name='soldPrice' placeholder='Sold Price'  value={this.state.soldPrice} onChange={(event)=>{this.setValues(event)}}/></div>
                        <div>
                            <div className='auction_manager_margin'>
                                <span className='auction_manager_span'>
                                    <input type='radio' name='isSold' value='Sold' onChange={(event)=>{this.setValues(event)}}/> Sold
                                </span>
                                <span className='auction_manager_span'>
                                    <input type='radio' name='isSold' value="UnSold" onChange={(event)=>{this.setValues(event)}}/> UnSold
                                </span>
                            </div>
                        </div>
                        <div className='auction_manager_bottom'><button className='auction_manager_button' onClick={()=>{this.submitHandler()}}>Submit</button></div>
                    </div>
                </div>
                <div className='col-6 inline_display auction_manager_column float_right'>
                    <div className='auction_manager_players_list'>
                        <div>Players</div>
                    </div>
                </div>
            </div>
        )
    }
}
