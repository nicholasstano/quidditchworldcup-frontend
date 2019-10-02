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
import Shop from './components/Shop'
import FourHundredTwentyTwo from './components/FourHundredTwentyTwo'
import TeamsWhoMadeIt from './containers/TeamsWhoMadeIt'
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
    roundOneGames: [],
    roundTwoGames: [],
    roundThreeGames: [],
    roundFourGames: [],
    winner: null
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
    const newUpdatedWeek = { ...this.state.selectedWeek, week_games: updatedWeek }
    const newWeeklyGames = this.state.weeklyGames.map(wg => wg.id === this.state.selectedWeek.id ? newUpdatedWeek : wg)
    this.setState({ selectedWeek: newUpdatedWeek, weeklyGames: newWeeklyGames })
  }

  updateRoundOneGameCard = (data) => {
    const completedGame = data
    let updatedRoundOne = this.state.roundOneGames.slice().map(game => game.teamInfo.playoff_game_id === completedGame.teamInfo.playoff_game_id ? completedGame : game)
    this.setState({ roundOneGames: updatedRoundOne })
  }

  updateRoundTwoGameCard = (data) => {
    const completedGame = data
    let updatedRoundTwo = this.state.roundTwoGames.slice().map(game => game.teamInfo.playoff_game_id === completedGame.teamInfo.playoff_game_id ? completedGame : game)
    this.setState({ roundTwoGames: updatedRoundTwo })
  }

  updateRoundThreeGameCard = (data) => {
    const completedGame = data
    let updatedRoundThree = this.state.roundThreeGames.slice().map(game => game.teamInfo.playoff_game_id === completedGame.teamInfo.playoff_game_id ? completedGame : game)
    this.setState({ roundThreeGames: updatedRoundThree })
  }

  updateRoundFourGameCard = (data) => {
    const completedGame = data
    let updatedRoundFour = this.state.roundFourGames.slice().map(game => game.teamInfo.playoff_game_id === completedGame.teamInfo.playoff_game_id ? completedGame : game)
    this.setState({ roundFourGames: updatedRoundFour })
  }

  updateRoundOneGames = (data) => {
    this.setState({ roundOneGames: data })
  }

  updateRoundTwoGames = (data) => {
    this.setState({ roundTwoGames: data })
  }

  updateRoundThreeGames = (data) => {
    this.setState({ roundThreeGames: data })
  }

  updateRoundFourGames = (data) => {
    this.setState({ roundFourGames: data })
  }

  updateWinner = (data) => {
    this.setState({ winner: data })
  }

  updateStandingsAndRosters = (data) => {
    this.setState({ allTeams: data })
  }

  updateStats = (data) => {
    this.setState({ allPlayers: data })
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
                <div><Home winner={this.state.winner} roundFourGames={this.state.roundFourGames} /></div>
              )
            }} />
          <Route
            path="/rosters"
            render={() => {
              return (
                <div><Roster allTeams={this.state.allTeams} updateStandingsAndRosters={this.updateStandingsAndRosters} /></div>
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
                <div><Stats allPlayers={this.state.allPlayers} updateStats={this.updateStats} /></div>
              )
            }} />
          <Route
            path="/standings"
            render={() => {
              return (
                <div><Standings allTeams={this.state.allTeams} updateStandingsAndRosters={this.updateStandingsAndRosters} /></div>
              )
            }} />
          <Route
            path="/playoffs"
            render={() => {
              return (
                <div><Playoffs weeklyGames={this.state.weeklyGames} roundOneGames={this.state.roundOneGames} updateRoundOneGames={this.updateRoundOneGames} updateRoundOneGameCard={this.updateRoundOneGameCard} roundTwoGames={this.state.roundTwoGames} updateRoundTwoGames={this.updateRoundTwoGames} updateRoundTwoGameCard={this.updateRoundTwoGameCard} roundThreeGames={this.state.roundThreeGames} updateRoundThreeGames={this.updateRoundThreeGames} updateRoundThreeGameCard={this.updateRoundThreeGameCard} roundFourGames={this.state.roundFourGames} updateRoundFourGames={this.updateRoundFourGames} updateRoundFourGameCard={this.updateRoundFourGameCard} winner={this.state.winner} updateWinner={this.updateWinner} /></div>
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
          <Route
            path="/shop"
            render={() => {
              return (
                <div><Shop /></div>
              )
            }} />
          <Route
            path="/fourhundredtwentytwo"
            render={() => {
              return (
                <div><FourHundredTwentyTwo /></div>
              )
            }} />
          <Route
            path="/teamswhomadeit"
            render={() => {
              return (
                <div><TeamsWhoMadeIt teams={this.state.allTeams} /></div>
              )
            }} />
        </Switch >
      </div>
    )
  }
}

export default withRouter(App)