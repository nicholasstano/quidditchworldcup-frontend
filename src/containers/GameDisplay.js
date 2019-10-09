import React, { Component } from 'react'
import GameDisplayCard from '../components/GameDisplayCard'

export class GameDisplay extends Component {

    renderSelectedWk = () => {
        if (this.props.weeklyGames.length > 0
            // && this.props.weeklyGames.filter(week => week.games_completed === true).length !== 14
        ) {
            return this.props.selectedWeek.week_games.map(game =>
                < GameDisplayCard key={game.game_id} {...game} />)
        }
        else {
            return
        }
    }

    render() {
        console.log(this.props.weeklyGames)
        return (
            <div className="all-game-display">
                <div className="date-display">
                    {this.props.selectedWeek === null ? "Loading" :
                        <div>
                            <p>{this.props.selectedWeek.name}:</p>
                            <p>{this.props.selectedWeek.date}</p>
                        </div>
                    }
                </div>
                {this.renderSelectedWk()}
            </div>
        )
    }
}

export default GameDisplay