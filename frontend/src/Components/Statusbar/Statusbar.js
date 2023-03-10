import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import AuctionManager from '../AuctionManager/AuctionManager'
import BudgetEstimation from '../BudgetEstimation/BudgetEstimation'
import EventDetails from '../EventDetails/EventDetails'
import ExpenseManagement from '../ExpenseManagement/ExpenseManagement'
import Manager from '../Manager/Manager'
import MatchMaker from '../MatchMaker/MatchMaker'
import PlayersList from '../PlayersList/PlayersList'
import TeamRegistration from '../TeamRegistration/TeamRegistration'
import UpdateMatch from '../UpdateMatch/UpdateMatch'
import './Statusbar.css'

function Statusbar() {
  const [details, setDetails] = useState(true)
  const [players, setPlayers] = useState(false)
  const [bulkRegistration, setBulkRegistration] = useState(false);
  const [managerControl, setManagerControl] = useState(false);
  const [matchMaker, setMatchMaker] = useState(false);
  const [matchUpdater, setMatchUpdater] = useState(false);
  const [auction, setAuction] = useState(false);
  const [budgetEstimation, setBudgetExtimation] = useState(false);
  const [expanseTracker, setExpanseTracker] = useState(false);
  const urlData=useParams();

  return (
    <div>
      <div className='main_div_status clearfix div_red'>
        <div className='status_div1'>
          Games Of Earth
        </div>
        <div className='status_div2 clearfixdiv_red'>
          <button className='status_button' onClick={() => {
            setDetails(true);
            setPlayers(false);
            setBulkRegistration(false);
            setManagerControl(false);
            setMatchMaker(false);
            setMatchUpdater(false);
            setAuction(false);
            setBudgetExtimation(false);
            setExpanseTracker(false)
          }} >Details</button>
          <button className='status_button' onClick={() => {
            setDetails(false);
            setPlayers(true);
            setBulkRegistration(false);
            setManagerControl(false);
            setMatchMaker(false);
            setMatchUpdater(false);
            setAuction(false);
            setBudgetExtimation(false);
            setExpanseTracker(false)
          }}>Players</button>
          <button className='status_button' onClick={() => {
            setDetails(false);
            setPlayers(false);
            setBulkRegistration(true);
            setManagerControl(false);
            setMatchMaker(false);
            setMatchUpdater(false);
            setAuction(false);
            setBudgetExtimation(false);
            setExpanseTracker(false)
          }}>Bulk registration</button>
          <button className='status_button' onClick={() => {
            setDetails(false);
            setPlayers(false);
            setBulkRegistration(false);
            setManagerControl(true);
            setMatchMaker(false);
            setMatchUpdater(false);
            setAuction(false);
            setBudgetExtimation(false);
            setExpanseTracker(false)
          }}>Manager control</button>
          <button className='status_button' onClick={() => {
            setDetails(false);
            setPlayers(false);
            setBulkRegistration(false);
            setManagerControl(false);
            setMatchMaker(true);
            setMatchUpdater(false);
            setAuction(false);
            setBudgetExtimation(false);
            setExpanseTracker(false)
          }}>match maker</button>
          <button className='status_button' onClick={() => {
            setDetails(false);
            setPlayers(false);
            setBulkRegistration(false);
            setManagerControl(false);
            setMatchMaker(false);
            setMatchUpdater(true);
            setAuction(false);
            setBudgetExtimation(false);
            setExpanseTracker(false)
          }}>match updater</button>
          <button className='status_button' onClick={() => {
            setDetails(false);
            setPlayers(false);
            setBulkRegistration(false);
            setManagerControl(false);
            setMatchMaker(false);
            setMatchUpdater(false);
            setAuction(true);
            setBudgetExtimation(false);
            setExpanseTracker(false)
          }}>auction</button>
          <button className='status_button' onClick={() => {
            setDetails(false);
            setPlayers(false);
            setBulkRegistration(false);
            setManagerControl(false);
            setMatchMaker(false);
            setMatchUpdater(false);
            setAuction(false);
            setBudgetExtimation(true);
            setExpanseTracker(false)
          }}>budget estimation</button>
          <button className='status_button' onClick={() => {
            setDetails(false);
            setPlayers(false);
            setBulkRegistration(false);
            setManagerControl(false);
            setMatchMaker(false);
            setMatchUpdater(false);
            setAuction(false);
            setBudgetExtimation(false);
            setExpanseTracker(true)
          }}>expense tracker</button>
          <button className='status_button'>expense dashboard</button>
          <button className='status_button'>scoreboard</button>
        </div>

      </div>
      <div className='clearfix '>
          {details&&<EventDetails id={urlData.id}/>}
          {players&&<PlayersList id={urlData.id}/>}
          {bulkRegistration&&<TeamRegistration id={urlData.id}/>}
          {managerControl&&<Manager id={urlData.id}/>}
          {matchMaker&&<MatchMaker id={urlData.id}/>}
          {matchUpdater&&<UpdateMatch id={urlData.id}/>}
          {auction&& <AuctionManager id={urlData.id}/>}
          {budgetEstimation&&<BudgetEstimation id={urlData.id}/>}
          {expanseTracker&& <ExpenseManagement id={urlData.id}/>}
        </div>
        <div className='status_div_color'>
          <input type='text' className='status_input' value={`http://localhost:3000/AddPlayer`} disabled/>
        </div>
    </div>

  )
}

export default Statusbar
