import React from 'react';
import './App.css';
import Home from '../src/containers/Home'
import NavBar from '../src/containers/NavBar'
import GameDisplay from '../src/components/GameDisplay'
import Roster from '../src/containers/Roster'
import Schedule from '../src/containers/Schedule'
import Standings from './containers/Standings'
import Stats from '../src/containers/Stats'
import { withRouter, Switch, Route } from 'react-router-dom'

export class App extends React.Component {
  render() {
    return (
      <div className="app">
        <GameDisplay />
        <NavBar />
        <Switch>
          <Route
            path="/home"
            render={() => {
              return (
                <div>
                  <Home />
                </div>
              )
            }}
          />
          <Route
            path="/rosters"
            render={() => {
              return (
                <div>
                  <Roster />
                </div>
              )
            }}
          />
          <Route
            path="/schedule"
            render={() => {
              return (
                <div>
                  <Schedule />
                </div>
              )
            }}
          />
          <Route
            path="/stats"
            render={() => {
              return (
                <div>
                  <Stats />
                </div>
              )
            }}
          />
          <Route
            path="/standings"
            render={() => {
              return (
                <div>
                  <Standings />
                </div>
              )
            }}
          />
          <Route
            path="/playoffs"
            render={() => {
              return (
                <div>
                  <Home />
                </div>
              )
            }}
          />
        </Switch >

      </div>
    )
  }
}

export default withRouter(App)
