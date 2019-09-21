import React, { Component } from 'react'
import { send } from 'q'

export class ScheduleGameCard extends Component {

    sendResults = () => {
        // console.log(this.props.game_id)
        fetch(`http://localhost:3000/games/${this.props.game_id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json",
                "accept": "application/json"
            },
        })
        // .then(res => res.json())
        // .then(data => console.log)
    }

    render() {
        return (
            <div>
                {this.props.game_completed ?
                    <div className="schedule-game-display">
                        <p><img src={this.props.away_flag} alt={this.props.away_name} />  {this.props.away_name}: {this.props.away_score}</p>
                        <p><img src={this.props.home_flag} alt={this.props.home_name} />  {this.props.home_name}: {this.props.home_score}</p>
                        <p><b>{this.props.snitch_caught_by}</b> from the <b>{this.props.team_captured_snitch}</b> captured the snitch.</p>
                        <p><b>FINAL</b></p>

                    </div>
                    :
                    <div className="schedule-game-display">
                        <p><img src={this.props.away_flag} alt={this.props.away_name} />  {this.props.away_name}: {this.props.away_score}</p>
                        <p><img src={this.props.home_flag} alt={this.props.home_name} />  {this.props.home_name}: {this.props.home_score}</p>
                        <button onClick={this.sendResults} > View Result</button>
                    </div>
                }
            </div>

        )
    }
}

export default ScheduleGameCard
