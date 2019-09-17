import React, { Component } from 'react'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

export class Schedule extends Component {
    render() {
        const options = [
            'Week 1', 'Week 2'
        ]
        const defaultOption = options[0]
        return (
            <div className="schedule">
                <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
                <div className="game-display">
                    <p><img src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/250px-Flag_of_Russia.svg.png" alt="Russia" />Russia: 210</p>
                    <p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/250px-Flag_of_Mexico.svg.png" alt="Mexico" />Mexico: 330</p>
                    <p>FINAL</p>
                    <p>Stats: Jose Rodriguez catches the snitch for Mexico.  Vladimir Tarasenko scored the quaffle 19 times for Russia.</p>
                </div>
                <div className="game-display">
                    <p><img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/250px-Flag_of_the_United_States.svg.png" alt="USA" />United States: 170</p>
                    <p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/250px-Flag_of_Canada_%28Pantone%29.svg.png" alt="Canada" />Canada: 180</p>
                    <p>FINAL</p>
                    <p>Stats: Ryan Sanderson scored the quaffle 15 times for USA.  Matt Barnaby caught the snitch for Canada.</p>
                </div>
            </div>
        )
    }
}

export default Schedule
