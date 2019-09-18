import React from 'react';
import './App.css';
import Home from '../src/containers/Home'
import NavBar from '../src/containers/NavBar'
import GameDisplay from '../src/components/GameDisplay'
import Roster from '../src/containers/Roster'
import Schedule from '../src/containers/Schedule'
import Standings from './containers/Standings'
import Stats from '../src/containers/Stats'
import Fantasy from '../src/containers/Fantasy'
import { withRouter, Switch, Route } from 'react-router-dom'

export class App extends React.Component {

  state = {
    weeklyGames: [],
    regular_season_games: [],
    allTeams: [],
    players: []
  }

  componentDidMount() {
    fetch(`http://localhost:3000/weeks`)
      .then(res => res.json())
      .then(data => this.setState({ weeklyGames: data }))
    fetch(`http://localhost:3000/teams`)
      .then(res => res.json())
      .then(data => this.setState({ allTeams: data }))
  }

  render() {
    return (
      <div className="app">
        <GameDisplay weeklyGames={this.state.weeklyGames} />
        <NavBar />
        <Switch>
          <Route
            path="/home"
            render={() => {
              return (
                <div><Home /></div>
              )
            }} />
          <Route
            path="/rosters"
            render={() => {
              return (
                <div><Roster /></div>
              )
            }} />
          <Route
            path="/schedule"
            render={() => {
              return (
                <div><Schedule weeklyGames={this.state.weeklyGames} /></div>
              )
            }} />
          <Route
            path="/stats"
            render={() => {
              return (
                <div><Stats /></div>
              )
            }} />
          <Route
            path="/standings"
            render={() => {
              return (
                <div><Standings allTeams={this.state.allTeams} /></div>
              )
            }} />
          <Route
            path="/playoffs"
            render={() => {
              return (
                <div><Home /></div>
              )
            }} />
          <Route
            path="/fantasy"
            render={() => {
              return (
                <div><Fantasy /></div>
              )
            }} />
        </Switch >
      </div>
    )
  }
}

export default withRouter(App)