import React, { Component } from 'react'
import GameDisplayCard from '../components/GameDisplayCard'

export class GameDisplay extends Component {

    renderSelectedWk = () => {
        if (this.props.weeklyGames.length > 0) {
            return this.props.selectedWeek.week_games.map(game =>
                < GameDisplayCard key={game.game_id} {...game} />)
        }
    }

    render() {
        return (
            <div className="all-game-display">
                <div className="date-display">
                    <p>{this.props.selectedWeek === null ? "Loading" : this.props.selectedWeek.date}</p>
                </div>
                {this.renderSelectedWk()}
            </div>
        )
    }
}

export default GameDisplay