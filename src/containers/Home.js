import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Home extends Component {

    roster = () => {
        return this.props.winner[0].player_roster.map(player =>
            <div id={player.id}>
                <b>{player.position}</b>: {player.name}
            </div>
        )
    }

    render() {
        return (
            <div className="home">
                <div className="home-sidebar">
                    <h5>Stories</h5>
                    {this.props.roundFourGames.length > 0 && this.props.winner ? <p><Link to="/shop">Buy 431st Quidditch Champion {this.props.winner[0].name} Merchandise</Link></p> : null}
                    <p><Link to="/standings">431st Quidditch World Cup: The Teams who Made it</Link></p>
                    <p><Link to="/firebolt">Quidditch World Cup Teams are a Proud Partner of the Firebolt Broomstick</Link></p>
                    <p><Link to="/home">Recapping the 422nd Quidditch World Cup</Link></p>
                    <p><Link to="/stats">Tournament Statistical Leaders</Link></p>

                </div>
                <div>
                    {this.props.roundFourGames.length > 0 && this.props.winner ?
                        <div className="home-story">
                            <h2>Your 431st Quidditch World Cup Champions: {this.props.winner[0].name}</h2>
                            <img src={this.props.winner[0].flag} alt={`${this.props.winner[0].name} flag`} />
                            <p>{this.roster()}</p>

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
