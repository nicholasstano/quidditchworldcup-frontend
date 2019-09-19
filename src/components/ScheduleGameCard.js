import React, { Component } from 'react'

export class ScheduleGameCard extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <div className="schedule-game-display">
                    <p><img src={this.props.away_flag} alt={this.props.away_name} />  {this.props.away_name}: {this.props.away_score}</p>
                    <p><img src={this.props.home_flag} alt={this.props.home_name} />  {this.props.home_name}: {this.props.home_score}</p>
                    <p>FINAL</p>
                    <p>Stats: </p>
                </div>
            </div>

        )
    }
}

export default ScheduleGameCard
