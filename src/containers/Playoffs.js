import React, { Component } from 'react'
import RoundOnePlayoffGameCard from '../components/RoundOnePlayoffGameCard'
import RoundTwoPlayoffGameCard from '../components/RoundTwoPlayoffGameCard'
import RoundThreePlayoffGameCard from '../components/RoundThreePlayoffGameCard'
import RoundFourPlayoffGameCard from '../components/RoundFourPlayoffGameCard'
import WinnerPlayoffGameCard from '../components/WinnerPlayoffGameCard'

export class Playoffs extends Component {

    componentDidMount() {
        fetch(`http://localhost:3000/playoff_games/roundOneGames`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "accept": "application/json"
            },
        })
            .then(res => res.json())
            .then(data => { this.props.updateRoundOneGames(data) }
            )
        fetch(`http://localhost:3000/playoff_games/roundTwoGames`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "accept": "application/json"
            },
        })
            .then(res => res.json())
            .then(data => {
                this.props.updateRoundTwoGames(data)
            }
            )
        fetch(`http://localhost:3000/playoff_games/roundThreeGames`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "accept": "application/json"
            },
        })
            .then(res => res.json())
            .then(data => {
                this.props.updateRoundThreeGames(data)
            }
            )
        fetch(`http://localhost:3000/playoff_games/roundFourGames`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "accept": "application/json"
            },
        })
            .then(res => res.json())
            .then(data => {
                this.props.updateRoundFourGames(data)
            }
            )
        fetch(`http://localhost:3000/playoff_games/winner`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "accept": "application/json"
            },
        })
            .then(res => res.json())
            .then(data => {
                this.props.updateWinner(data)
            }
            )
    }

    renderRoundOneGames = () => {
        return this.props.roundOneGames.map(game =>
            <RoundOnePlayoffGameCard {...game} key={game.teamInfo.playoff_game_id} updateRoundOneGameCard={this.props.updateRoundOneGameCard} />)
    }

    renderRoundTwoGames = () => {
        return this.props.roundTwoGames.map(game =>
            <RoundTwoPlayoffGameCard {...game} key={game.teamInfo.playoff_game_id} updateRoundTwoGameCard={this.props.updateRoundTwoGameCard} />)
    }

    renderRoundThreeGames = () => {
        return this.props.roundThreeGames.map(game =>
            <RoundThreePlayoffGameCard {...game} key={game.teamInfo.playoff_game_id} updateRoundThreeGameCard={this.props.updateRoundThreeGameCard} />)
    }

    renderRoundFourGames = () => {
        return this.props.roundFourGames.map(game =>
            <RoundFourPlayoffGameCard {...game} key={game.teamInfo.playoff_game_id} updateRoundFourGameCard={this.props.updateRoundFourGameCard} />)
    }

    renderWinner = () => {
        return this.props.winner.map(team =>
            < WinnerPlayoffGameCard {...team} key={team.id} />
        )
    }

    render() {
        return (
            <div>
                {this.props.weeklyGames === null ? <h1>Loading</h1> :
                    <div>
                        <div className="brackets">
                            {this.props.roundOneGames.length > 0 ?
                                <div className="round-of-sixteen">
                                    <h5>Round One</h5>
                                    {this.renderRoundOneGames()}
                                </div>
                                : <h5 className="bracket-header">Round One</h5>
                            }
                            {this.props.roundTwoGames || this.props.roundTwoGames.length > 0 ?
                                <div className="round-of-eight">
                                    <h5 className="bracket-header">Quarter Finals</h5>
                                    {this.renderRoundTwoGames()}
                                </div> :
                                <h5 className="bracket-header">Quarter Finals</h5>
                            }
                            {this.props.roundThreeGames.length > 0 ?
                                <div className="round-of-four">
                                    <h5 className="bracket-header">Semi Finals</h5>
                                    {this.renderRoundThreeGames()}
                                </div> :
                                <h5>Semi Finals</h5>
                            }
                            {this.props.roundFourGames.length > 0 ?
                                <div className="round-of-two">
                                    <h5 className="bracket-header">Quidditch World Cup Finals</h5>
                                    {this.renderRoundFourGames()}
                                </div> :
                                <h5 className="bracket-header">Quidditch World Cup Finals</h5>
                            }
                            {this.props.winner ?
                                <div className="winner">
                                    <h5 className="bracket-header">Winner</h5>
                                    {this.renderWinner()}
                                </div> :
                                <h5 className="bracket-header">Winner</h5>
                            }
                        </div>
                    </div>
                }
            </div >
        )
    }
}

export default Playoffs