import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class NavBar extends Component {
    render() {
        return (
            <div className="navbar">
                <Link to="">
                    431st Qudditich World Cup
                </Link>
                <Link to="">
                    Rosters
                </Link>
                <Link to="">
                    Schedule
                </Link>
                <Link to="">
                    Player Stats
                </Link>
                <Link to="">
                    Standings
                </Link>
                <Link to="">
                    Playoffs
                </Link>
                <Link to="">
                    Weekly Pick Em
                </Link>
                <Link to="">
                    Eliminator Pick Em
                </Link>
                <Link to="">
                    Daily Fantasy
                </Link>
            </div>
        )
    }
}

export default NavBar
