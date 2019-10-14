import React, { Component } from 'react'
import GameDisplayCard from '../components/GameDisplayCard'
import GamePlayoffDisplayCard from '../components/GamePlayoffDisplayCard'

export class GameDisplay extends Component {

    renderSelectedWk = () => {
        if (this.props.playoffGames.length > 0) {
            let playoffGameCards = this.props.playoffGames.map(game =>
                <GamePlayoffDisplayCard key={game.teamInfo.playoff_game_id} {...game.teamInfo} />).reverse()
            return playoffGameCards
        }
        else if (this.props.weeklyGames.length > 0) {
            return this.props.selectedWeek.week_games.map(game =>
                < GameDisplayCard selectedWeek={this.props.selectedWeek} key={game.game_id} {...game} />
            )
        }
    }
    render() {
        return (
            <div className="all-game-display">
                {this.renderSelectedWk()}
            </div>
        )
    }
}

export default GameDisplay