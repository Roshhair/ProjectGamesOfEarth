import React, { Component } from 'react'
import http from '../axiosHandler'
import './TeamRegistration.css'

export default class TeamRegistration extends Component {
    constructor(props) {
        super(props)

        this.state = {
            teamName: "",
            tempPlayerName: "",
            tempPlayerPhone: "",
            tempPlayerAge: "",
            players: [],
        }
    }
    async addPlayerHandler() {
        this.setState({ ...this.state, numberofPlayers: this.state.numberofPlayers + 1 })
        var data = {
            name: this.state.tempPlayerName,
            phone: this.state.tempPlayerPhone,
            age: this.state.tempPlayerAge
        }
        this.setState({ ...this.state, players: [...this.state.players, data]});
        // this.formClear()
    }
    formClear(){
        this.setState({...this.state,tempPlayerName:"",tempPlayerPhone:"",tempPlayerAge:""})
    }
    deleteHandler(phone, name, age) {
        var data = [];
        for (var d of this.state.players) {
            if (phone !== d.phone && name !== d.playerName && age !== d.age) {
                data = [...data, d];
            }
        }
        this.setState({ ...this.state, players: data });
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
    submitHanler(){
        if(this.state.teamName===""){
            return;
        }
        const data={
            teamName:{name:this.state.teamName},
            players:this.state.players,
            id:this.props.id
        }
        http.post("/add-team",data).then(res=>{
            if(res.status==200){
                return;
            }
            alert("Something Went Wrong")
        });
    }
    render() {
        return (
            <div className="team_registration_container col-12 clearfix">
                <div className='col-6 team_registration_add_team_data float_left'>
                    <div className='team_registration_title '>Team Registration</div>
                    <hr className='' />
                    <div>
                        <input type='text' name="teamName" value={this.state.teamName} onChange={(event) => { this.setValues(event) }} className='team_registration_input team_registration_input_margin' placeholder='TeamName' />
                    </div>
                    <hr />
                    <div className='team_registration_semi_title team_registration_margin'>Add Player</div>
                    <hr />
                    <div className='col-12 clearfix team_registration_padding'>
                        <div className='col-6 team_registration_inline float_left'>
                            <input type='text' className='team_registration_input' name="tempPlayerName" onChange={(event) => { this.setValues(event) }} placeholder='Name' />
                        </div >
                        <div className='col-6 team_registration_inline float_right'>
                            <input type='number' className='team_registration_input' name='tempPlayerPhone' onChange={(event) => { this.setValues(event) }} placeholder='Phone Number' />
                        </div>
                        <div className='col-6 team_registration_inline float_left'>
                            <input type='number' className='team_registration_input' name='tempPlayerAge' onChange={(event) => { this.setValues(event) }} placeholder='Age' />
                        </div>
                        <div className='col-6 team_registration_inline float_right'>
                            <button className='team_registration_button team_registration_margin_lwft' onClick={()=>{this.addPlayerHandler()}}>save</button>
                        </div>
                    </div>
                    <div className='team_registration_text_center'>
                        <button className='team_registration_button '>Submit</button>
                    </div>
                </div>
                <div className='col-6 float_right team_registration_div'>
                    <div className='team_registration_teams_div'>
                        <div className='team_registration_team_card'>
                            <div className='col-12'>
                                <div className='col-3 team_registration_inline team_registration_text_center'>Name</div>
                                <div className='col-3 team_registration_inline team_registration_text_center'>Phone</div>
                                <div className='col-3 team_registration_inline team_registration_text_center'>Age</div>
                                <div className='col-3 team_registration_inline team_registration_text_center'>Delete</div>
                            </div>
                        </div>
                        {this.state.players.map((player) => {
                            return (
                                <div key={player} className='team_registration_team_card'>
                                    <div className='col-12'>
                                        <div className='col-3 team_registration_inline team_registration_text_center'>{player.name}</div>
                                        <div className='col-3 team_registration_inline team_registration_text_center'>{player.phone}</div>
                                        <div className='col-3 team_registration_inline team_registration_text_center'>{player.age}</div>
                                        <div className='col-3 team_registration_inline team_registration_text_center'><button className='team_registration_team_card_button' onClick={()=>{this.deleteHandler(player.phone,player.playerName,player.age)}}>Delete</button></div>
                                    </div>
                                </div>
                            );
                        })}

                    </div>
                </div>
            </div>
        )
    }
}
