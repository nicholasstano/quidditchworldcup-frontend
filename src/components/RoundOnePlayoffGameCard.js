import React, { Component } from 'react'

export class RoundOnePlayoffGameCard extends Component {

    sendRoundOneResults = () => {
        fetch(`http://localhost:3000/playoff_games/${this.props.teamInfo.playoff_game_id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json",
                "accept": "application/json"
            },
        }).then(res => res.json()).then(data => {
            this.props.updateRoundOneGameCard(data)
        }
        )
    }

    render() {
        return (
            <div>
                {this.props.teamInfo.game_completed ?
                    <div className="roundOne-game-display">
                        <p><img src={this.props.teamInfo.away_flag} alt={this.props.teamInfo.away_name} />  {this.props.teamInfo.away_name}: {this.props.teamInfo.away_score}</p>
                        <p><img src={this.props.teamInfo.home_flag} alt={this.props.teamInfo.home_name} />  {this.props.teamInfo.home_name}: {this.props.teamInfo.home_score}</p>
                        <p><b>{this.props.teamInfo.snitch_caught_by}</b> of <b>{this.props.teamInfo.team_captured_snitch}</b> captured the snitch.</p>
                        <p><b>FINAL</b></p>
                    </div>
                    :
                    <div className="roundOne-game-display">
                        <p><img src={this.props.teamInfo.away_flag} alt={this.props.teamInfo.away_name} />  {this.props.teamInfo.away_name}: {this.props.teamInfo.away_score}</p>
                        <p><img src={this.props.teamInfo.home_flag} alt={this.props.teamInfo.home_name} />  {this.props.teamInfo.home_name}: {this.props.teamInfo.home_score}</p>
                        <button onClick={this.sendRoundOneResults}> View Result</button>
                    </div>
                }
            </div>
        )
    }
}

export default RoundOnePlayoffGameCard
