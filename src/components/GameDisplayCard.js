import React, { Component } from 'react'

export class GameDisplayCard extends Component {

    render() {
        return (
            <div>
                <div className="home-game-display">
                    <p><img src={this.props.away_flag} alt={this.props.away_name} /> {this.props.away_name}: {this.props.away_score}</p>
                    <p><img src={this.props.home_flag} alt={this.props.home_name} /> {this.props.home_name}: {this.props.home_score}</p>
                    {this.props.game_completed === true ? <p>Final</p> : null}
                </div>
            </div>
        )
    }
}

export default GameDisplayCard