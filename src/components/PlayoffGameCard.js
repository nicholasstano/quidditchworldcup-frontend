import React, { Component } from 'react'

export class PlayoffGameCard extends Component {
    render() {
        return (
            <div>
                {this.props.teamInfo.game_completed ?
                    <div className="roundOne-game-display">
                        <p><img src={this.props.teamInfo.away_flag} alt={this.props.teamInfo.away_name} />  {this.props.teamInfo.away_name}: {this.props.teamInfo.away_score}</p>
                        <p><img src={this.props.teamInfo.home_flag} alt={this.props.teamInfo.home_name} />  {this.props.teamInfo.home_name}: {this.props.teamInfo.home_score}</p>
                        <p><b>{this.props.teamInfo.snitch_caught_by}</b> from the <b>{this.props.teamInfo.team_captured_snitch}</b> captured the snitch.</p>
                        <p><b>FINAL</b></p>
                    </div>
                    :
                    <div className="roundOne-game-display">
                        <p><img src={this.props.teamInfo.away_flag} alt={this.props.teamInfo.away_name} />  {this.props.teamInfo.away_name}: {this.props.teamInfo.away_score}</p>
                        <p><img src={this.props.teamInfo.home_flag} alt={this.props.teamInfo.home_name} />  {this.props.teamInfo.home_name}: {this.props.teamInfo.home_score}</p>
                        <button > View Result</button>
                    </div>
                }
            </div>
        )
    }
}

export default PlayoffGameCard
