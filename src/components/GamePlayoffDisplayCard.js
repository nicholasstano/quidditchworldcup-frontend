import React, { Component } from 'react'

export class GamePlayoffDisplayCard extends Component {

    renderPlayoffDisplayCards = () => {
        if (this.props.playoff_week_id === 1) {
            return <div className="home-game-display">
                <p><b>Round 1</b></p>
                <p><img src={this.props.away_flag} alt={this.props.away_name} /> {this.props.away_name}: {this.props.away_score}</p>
                <p><img src={this.props.home_flag} alt={this.props.home_name} /> {this.props.home_name}: {this.props.home_score}</p>
                {this.props.game_completed === true ? <p><b>Final</b></p> : null}
            </div>
        }
        else if (this.props.playoff_week_id === 2) {
            return <div className="home-game-display">
                <p><b>Quarter Finals</b></p>
                <p><img src={this.props.away_flag} alt={this.props.away_name} /> {this.props.away_name}: {this.props.away_score}</p>
                <p><img src={this.props.home_flag} alt={this.props.home_name} /> {this.props.home_name}: {this.props.home_score}</p>
                {this.props.game_completed === true ? <p><b>Final</b></p> : null}
            </div>
        }
        else if (this.props.playoff_week_id === 3) {
            return <div className="home-game-display">
                <p><b>Semi Finals</b></p>
                <p><img src={this.props.away_flag} alt={this.props.away_name} /> {this.props.away_name}: {this.props.away_score}</p>
                <p><img src={this.props.home_flag} alt={this.props.home_name} /> {this.props.home_name}: {this.props.home_score}</p>
                {this.props.game_completed === true ? <p><b>Final</b></p> : null}
            </div>
        }
        else if (this.props.playoff_week_id === 4) {
            return <div className="home-game-display">
                <p><b>QWC Final</b></p>
                <p><img src={this.props.away_flag} alt={this.props.away_name} /> {this.props.away_name}: {this.props.away_score}</p>
                <p><img src={this.props.home_flag} alt={this.props.home_name} /> {this.props.home_name}: {this.props.home_score}</p>
                {this.props.game_completed === true ? <p><b>Final</b></p> : null}
            </div>
        }
    }

    render() {
        return (
            <div>
                {this.renderPlayoffDisplayCards()}
            </div>
        )
    }
}

export default GamePlayoffDisplayCard