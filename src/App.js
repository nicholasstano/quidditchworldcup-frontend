import React from 'react';
import './App.css';
import Home from '../src/containers/Home'
import NavBar from '../src/containers/NavBar'
import GameDisplay from './containers/GameDisplay'
import Roster from '../src/containers/Roster'
import Schedule from '../src/containers/Schedule'
import Standings from './containers/Standings'
import Stats from '../src/containers/Stats'
import Fantasy from '../src/containers/Fantasy'
import Playoffs from '../src/containers/Playoffs'
import Firebolt from '../src/components/Firebolt'
import { withRouter, Switch, Route } from 'react-router-dom'

export class App extends React.Component {

  state = {
    weeklyGames: [],
    regular_season_games: [],
    allTeams: [],
    allPlayers: [],
    selectedWeek: null,
    option: "Week 1",
    playoffTeams: [],
    roundOneGames: []
  }

  componentDidMount() {
    fetch(`http://localhost:3000/weeks`)
      .then(res => res.json())
      .then(weeks => this.setState({ weeklyGames: weeks, selectedWeek: weeks[0] }))
    fetch(`http://localhost:3000/teams`)
      .then(res => res.json())
      .then(teams => this.setState({ allTeams: teams }))
    fetch(`http://localhost:3000/players`)
      .then(res => res.json())
      .then(players => this.setState({ allPlayers: players }))
  }

  changeWeek = (event) => {
    if (event.value) {
      let weekGames = this.state.weeklyGames.filter(week => week.name === event.value)
      this.setState({ selectedWeek: weekGames[0], option: event.value })
    }
  }

  updateGameCard = (data) => {
    const newGameWeek = data.game
    let updatedWeek = this.state.selectedWeek.week_games.slice().map(weekGame => weekGame.game_id === newGameWeek.game_id ? newGameWeek : weekGame)
    this.setState({ selectedWeek: { ...this.state.selectedWeek, week_games: updatedWeek } })
  }

  updateRoundOneGames = (data) => {
    this.setState({ roundOneGames: data })
  }

  render() {
    return (
      <div className="app">
        <GameDisplay weeklyGames={this.state.weeklyGames} selectedWeek={this.state.selectedWeek} />
        <br />
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
                <div><Roster allTeams={this.state.allTeams} /></div>
              )
            }} />
          <Route
            path="/schedule"
            render={() => {
              return (
                <div><Schedule weeklyGames={this.state.weeklyGames} selectedWeek={this.state.selectedWeek} option={this.state.option} changeWeek={this.changeWeek} updateGameCard={this.updateGameCard} /></div>
              )
            }} />
          <Route
            path="/stats"
            render={() => {
              return (
                <div><Stats allPlayers={this.state.allPlayers} /></div>
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
                <div><Playoffs weeklyGames={this.state.weeklyGames} roundOneGames={this.state.roundOneGames} updateRoundOneGames={this.updateRoundOneGames} /></div>
              )
            }} />
          <Route
            path="/fantasy"
            render={() => {
              return (
                <div><Fantasy /></div>
              )
            }} />
          <Route
            path="/firebolt"
            render={() => {
              return (
                <div><Firebolt /></div>
              )
            }} />
        </Switch >
      </div>
    )
  }
}

export default withRouter(App)