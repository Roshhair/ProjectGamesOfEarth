import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        data:this.props.data
      }
    }
  render() {
    return (
      <>
        <div className='footer'>
            <ul className='footer_list'>
                <li className='footer_list_items'><span className='footer_span'>GAMESOFEARTH</span>	&copy; 2023</li>
                {this.state.data.map((data)=>(<li key={data.id} className={data.licss}><a className={data.acss} href={`/${data.name}`}>{data.name}</a></li>))}
            </ul>
        </div>
      </>
    )
  }
}
