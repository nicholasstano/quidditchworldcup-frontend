import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Home extends Component {

    roster = () => {
        return this.props.winner[0].player_roster.map(player =>
            <div key={player.id}>
                <b>{player.position}</b>: {player.name}
            </div>
        )
    }

    render() {
        return (
            <div className="home">
                <div className="home-sidebar">
                    <h5>Stories</h5>
                    <p><Link to="/teamswhomadeit">431st Quidditch World Cup: The Teams who Made it</Link></p>
                    <p><Link to="/firebolt">Quidditch World Cup Teams are a Proud Partner of the Firebolt Broomstick</Link></p>
                    <p><Link to="/fourhundredtwentytwo">Recapping the 422nd Quidditch World Cup</Link></p>
                    <p><Link to="/stats">Tournament Statistical Leaders</Link></p>

                </div>
                <div>
                    {this.props.roundFourGames.length > 0 && (this.props.winner && this.props.winner.length > 0) ?
                        <div className="home-story">
                            <h2>431st Quidditch World Cup Champions:</h2>
                            <h1>{this.props.winner[0].name}</h1>
                            <p><Link to="/shop">Buy {this.props.winner[0].name} Championship Merchandise</Link></p>
                            <img src={this.props.winner[0].flag} alt={`${this.props.winner[0].name} flag`} />
                            <br />
                            <div>{this.roster()}</div>

                        </div>
                        :
                        <div className="home-story">
                            <h2>Quidditch: The Most Popular Sport in the Wizarding World.</h2>
                            <img src="https://vignette.wikia.nocookie.net/harrypotter/images/f/fd/QWC.png/revision/latest?cb=20161023220629" alt="QWC LOGO" />
                            <h4>Thirty Two teams competing in 2030 and hoping to join previous Quidditch World Cup Winners: Australia (1966), Syria (1974), Canada (1990), Ireland (1994), Malawi (1998), Egypt (2002), Burkina Faso (2006), Moldova (2010), Bulgaria (2014) and many others!</h4>
                        </div>}
                </div>
            </div >
        )
    }
}

export default Home
