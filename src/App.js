import React from 'react';
import './App.css';
import Home from '../src/containers/Home'
import NavBar from '../src/containers/NavBar'
import GameDisplay from '../src/components/GameDisplay'
import Roster from '../src/containers/Roster'
import Schedule from '../src/containers/Schedule'
import Playoffs from '../src/containers/Playoffs'
import Stats from '../src/containers/Stats'

import { withRouter, Switch, Route } from 'react-router-dom'

export class App extends React.Component {
  render() {
    return (
      <div className="app">
        <GameDisplay />
        <NavBar />
        <Playoffs />
        <Stats />
        <Schedule />
        <Roster />
        <Home />
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
        </Switch >
      </div>
    )
  }
}

export default withRouter(App)
