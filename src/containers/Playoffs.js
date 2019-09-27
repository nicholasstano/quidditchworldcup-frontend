import React, { Component } from 'react'
import RoundOnePlayoffGameCard from '../components/RoundOnePlayoffGameCard'
import RoundTwoPlayoffGameCard from '../components/RoundTwoPlayoffGameCard'
import RoundThreePlayoffGameCard from '../components/RoundThreePlayoffGameCard'
import RoundFourPlayoffGameCard from '../components/RoundFourPlayoffGameCard'
import WinnerPlayoffGameCard from '../components/WinnerPlayoffGameCard'

export class Playoffs extends Component {

    componentDidMount() {
        fetch(`http://localhost:3000/playoff_games/roundOneGames`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "accept": "application/json"
            },
        })
            .then(res => res.json())
            .then(data => { this.props.updateRoundOneGames(data) }
            )
        fetch(`http://localhost:3000/playoff_games/roundTwoGames`, {
            method: "POST",
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
            method: "POST",
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
            method: "POST",
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
            // console.log(team)
            < WinnerPlayoffGameCard {...team} key={team.id} />
        )
    }

    render() {
        return (
            <div>
                {this.props.weeklyGames === null ? <h1>Loading</h1> :
                    <div>
                        <div className="brackets">
                            <h5>Round One</h5>
                            <h5>Quarter Finals</h5>
                            <h5>Semi Finals</h5>
                            <h5>Quidditch World Cup Finals</h5>
                            <h5>Winner</h5>
                        </div>
                        <div className="brackets">
                            {this.props.roundOneGames.length > 0 ?
                                <div className="round-of-sixteen">
                                    {this.renderRoundOneGames()}
                                </div>
                                : ""}
                            {this.props.roundTwoGames.length > 0 ?
                                <div className="round-of-eight">
                                    {this.renderRoundTwoGames()}
                                </div> :
                                ""}
                            {this.props.weeklyGames ?
                                <div className="round-of-four">
                                    {this.renderRoundThreeGames()}
                                </div> :
                                ""}
                            {this.props.weeklyGames ?
                                <div className="round-of-two">
                                    {this.renderRoundFourGames()}
                                </div> :
                                ""}
                            {this.props.weeklyGames ?
                                <div className="winner">
                                    {this.renderWinner()}
                                </div> :
                                ""}
                        </div>
                    </div>
                }
            </div >
        )
    }
}

export default Playoffs