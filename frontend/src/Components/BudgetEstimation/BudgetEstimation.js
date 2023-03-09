import React, { Component } from 'react'
import './BudgetEstimation.css'

export default class BudgetEstimation extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         items:[],
         itemName:"",
         itemQuantity: "",
         itemPrice:""
      }
    }
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
        console.log(this.state)
        //axios after that
    }
    render() {
        return (
            <div className='budget_estimation'>
                <div className='budget_estimation_title' >Budget Estimation</div>
                <hr />
                <div className='col-12'>
                    <div className='col-3 inline_display'>
                        <input type='text' className='budget_estimation_input' name='itemName' value={this.state.itemName} onChange={(event)=>{this.setValues(event)}} placeholder='Item Name' />
                    </div>
                    <div className='col-3 inline_display'>
                        <input type='number' className='budget_estimation_input' name='itemQuantity' value={this.state.itemQuantity} onChange={(event)=>{this.setValues(event)}} placeholder='Quantity' />
                    </div>
                    <div className='col-3 inline_display'>
                        <input type='number' className='budget_estimation_input' name='itemPrice' value={this.state.itemPrice} onChange={(event)=>{this.setValues(event)}} placeholder='Price per Item' />
                    </div>
                    <div className='col-3 inline_display budget_estimation_center'>
                        <button className='budget_estimation_button' onClick={()=>{this.setValues()}}>Add Item</button>
                    </div>
                </div>
                <div className='col-12'>
                    <div className='budget_estimation_items'>
                        <div className='budget_estimation_item clearfix'>
                            <div className='col-3 inline_display'>
                                Item Name
                            </div>
                            <div className='col-3 inline_display'>
                                Quantity
                            </div>
                            <div className='col-3 inline_display'>
                                Price per Item
                            </div>
                            <div className='col-3 inline_display'>
                                Total
                            </div>
                        </div>
                        <div className='budget_estimation_item clearfix'>
                            <div className='col-3 inline_display'>
                                FootBall
                            </div>
                            <div className='col-3 inline_display'>
                                2
                            </div>
                            <div className='col-3 inline_display'>
                                10
                            </div>
                            <div className='col-3 inline_display'>
                                20
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
