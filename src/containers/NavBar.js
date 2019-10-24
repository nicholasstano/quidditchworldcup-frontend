import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class NavBar extends Component {

    render() {
        return (
            <div className="navbar">
                <Link className="navbar-link" to="/home">QuidditchWorldCup.com</Link>
                <Link className="navbar-link" to="/rosters">Rosters</Link>
                <Link className="navbar-link" to="/schedule" >Schedule</Link>
                <Link className="navbar-link" to="/stats">Player Stats</Link>
                <Link className="navbar-link" to="/standings">Standings</Link>
                <Link className="navbar-link" to="/playoffs">Playoffs</Link>
                {this.props.user == null ?
                    <Link className="navbar-link" to="/login">Fantasy Sports</Link> :
                    <Link className="navbar-link" to="/fantasy">Fantasy Sports</Link>}
            </div>
        )
    }
}

export default NavBar