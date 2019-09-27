import React, { Component } from 'react'

export class RoundTwoPlayoffGameCard extends Component {

    sendRoundTwoResults = () => {
        fetch(`http://localhost:3000/playoff_games/${this.props.teamInfo.playoff_game_id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json",
                "accept": "application/json"
            },
        }).then(res => res.json()).then(data => {
            this.props.updateRoundTwoGameCard(data)
        }
        )
    }

    render() {
        return (
            <div>
                {this.props.teamInfo.game_completed ?
                    <div className="roundTwo-game-display">
                        <p><img src={this.props.teamInfo.away_flag} alt={this.props.teamInfo.away_name} />  {this.props.teamInfo.away_name}: {this.props.teamInfo.away_score}</p>
                        <p><img src={this.props.teamInfo.home_flag} alt={this.props.teamInfo.home_name} />  {this.props.teamInfo.home_name}: {this.props.teamInfo.home_score}</p>
                        <p><b>{this.props.teamInfo.snitch_caught_by}</b> from the <b>{this.props.teamInfo.team_captured_snitch}</b> captured the snitch.</p>
                        <p><b>FINAL</b></p>
                    </div>
                    :
                    <div className="roundTwo-game-display">
                        <p><img src={this.props.teamInfo.away_flag} alt={this.props.teamInfo.away_name} />  {this.props.teamInfo.away_name}: {this.props.teamInfo.away_score}</p>
                        <p><img src={this.props.teamInfo.home_flag} alt={this.props.teamInfo.home_name} />  {this.props.teamInfo.home_name}: {this.props.teamInfo.home_score}</p>
                        <button onClick={this.sendRoundTwoResults}> View Result</button>
                    </div>
                }
            </div>
        )
    }
}

export default RoundTwoPlayoffGameCard
