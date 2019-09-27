import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class NavBar extends Component {

    render() {
        return (
            <div className="navbar">
                <Link className="navbar-link" to="/home"> 431st Qudditich World Cup</Link>
                <Link className="navbar-link" to="/rosters">Rosters</Link>
                <Link className="navbar-link" to="/schedule" >Schedule</Link>
                <Link className="navbar-link" to="/stats">Player Stats</Link>
                <Link className="navbar-link" to="/standings">Standings</Link>
                <Link className="navbar-link" to="/playoffs">Playoffs</Link>
                <Link className="navbar-link" to="/fantasy">Weekly Pick Em</Link>
                <Link className="navbar-link" to="/fantasy">Eliminator Pick Em</Link>
                <Link className="navbar-link" to="/fantasy">Daily Fantasy</Link>
            </div>
        )
    }
}

export default NavBar
