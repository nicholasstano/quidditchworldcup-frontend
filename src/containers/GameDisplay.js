import React, { Component } from 'react'
import GameDisplayCard from '../components/GameDisplayCard'

export class GameDisplay extends Component {

    renderSelectedWk = () => {
        if (this.props.weeklyGames.length > 0) {
            let uncompletedWeek = this.props.weeklyGames.filter(week => week.games_completed === false)[0]
            let uncompletedGames = uncompletedWeek.week_games.map(game => <GameDisplayCard {...game} key={game.game_id} />)
            return uncompletedGames
        }
    }

    setDate = () => {
        if (this.props.weeklyGames.length > 0) {
            let uncompletedWeek = this.props.weeklyGames.filter(week => week.games_completed === false)[0]
            this.props.weeklyGames.map(week => fetch(`http://localhost:3000/weeks/${week.id}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-type": "application/json",
                        "accept": "application/json"
                    },
                }))
            return uncompletedWeek.date
        }
    }
    render() {
        return (
            <div className="all-game-display">
                <div className="date-display">
                    <p>{this.setDate()}</p>
                </div>
                {this.renderSelectedWk()}
            </div>
        )
    }
}

export default GameDisplay