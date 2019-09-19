import React, { Component } from 'react'

export class ScheduleGameCard extends Component {
    render() {
        return (
            <div>
                {this.props.game_completed ?
                    <div className="schedule-game-display">
                        <p><img src={this.props.away_flag} alt={this.props.away_name} />  {this.props.away_name}: {this.props.away_score}</p>
                        <p><img src={this.props.home_flag} alt={this.props.home_name} />  {this.props.home_name}: {this.props.home_score}</p>
                        <p>Player Name from Player Team Caught the Snitch</p>

                    </div>
                    :
                    <div className="schedule-game-display">
                        <p><img src={this.props.away_flag} alt={this.props.away_name} />  {this.props.away_name}: {this.props.away_score}</p>
                        <p><img src={this.props.home_flag} alt={this.props.home_name} />  {this.props.home_name}: {this.props.home_score}</p>
                        <button onClick={() => console.log(this.props.game_id)}>View Result</button>
                    </div>
                }
            </div>

        )
    }
}

export default ScheduleGameCard
