import React, { Component } from 'react'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import ScheduleGameCard from '../components/ScheduleGameCard'

export class Schedule extends Component {

    state = {
        selectedWeek: null
    }

    changeWeek = (event) => {
        console.log(event)
    }

    render() {

        console.log(this.props.weeklyGames.filter(week => week.name === "Week 1"))
        let weekOneGameCards = []
        if (this.props.weeklyGames.length > 0) {
            let weekOneGames = this.props.weeklyGames.filter(week => week.name === "Week 1")
            weekOneGameCards = weekOneGames[0].week_games.map(game => <ScheduleGameCard {...game} />)
        }
        const options = [
            'Week 1',
            'Week 2',
            'Week 3',
            'Week 4',
            'Week 5',
            'Week 6',
            'Week 7',
            'Week 8',
            'Week 9',
            'Week 10',
            'Week 11',
            'Week 12',
            'Week 13',
            'Week 14',
        ]

        const defaultOption = options[0]

        return (
            <div onClick={this.changeWeek} className="schedule">
                <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
                <br />
                {weekOneGameCards}
            </div>
        )
    }
}

export default Schedule
