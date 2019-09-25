import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class NavBar extends Component {

    render() {
        return (
            <div className="navbar">
                <Link to="/home"> 431st Qudditich World Cup</Link>
                <Link to="/rosters">Rosters</Link>
                <Link to="/schedule" >Schedule</Link>
                <Link to="/stats">Player Stats</Link>
                <Link to="/standings">Standings</Link>
                <Link to="/playoffs">Playoffs</Link>
                <Link to="/fantasy">Weekly Pick Em</Link>
                <Link to="/fantasy">Eliminator Pick Em</Link>
                <Link to="/fantasy">Daily Fantasy</Link>
            </div>
        )
    }
}

export default NavBar
