import React, { Component } from 'react'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import ScheduleGameCard from '../components/ScheduleGameCard'

export class Schedule extends Component {

    // completedWeek = () => {
    //     let gamesDone = this.props.selectedWeek.week_games.filter(game => game.completed === false)
    //     if (gamesDone.length > 0) {
    //         this.setState({ weekFinished: "Completed" })
    //         fetch(`http://localhost:3000/weeks/${this.props.selectedWeek.id}`, {
    //             method: "PATCH",
    //             headers: {
    //                 "Content-type": "application/json",
    //                 "accept": "application/json"
    //             },
    //         }).then(res => res.json()).then(data => {
    //             this.props.updateWeek(data)
    //         }
    //         )
    //     }
    //     else {
    //         return this.setState({ weekFinished: "In Progress" })
    //     }
    // }

    renderSelectedWk = () => {
        return this.props.selectedWeek.week_games.map(game =>
            < ScheduleGameCard updateGameCard={this.props.updateGameCard} key={game.game_id} {...game} />)
    }

    render() {
        let weekOneGameCards = []
        if (this.props.weeklyGames.length > 0) {
            let weekOneGames = this.props.weeklyGames.filter(week => week.name === "Week 1")
            weekOneGameCards = weekOneGames[0].week_games.map(game =>
                < ScheduleGameCard updateGameCard={this.props.updateGameCard} key={game.game_id} {...game} />)
        }

        const options = this.props.weeklyGames.map(week => week.name)
        return (

            <div onClick={this.props.changeWeek} className="schedule-with-dropdown">
                <Dropdown options={options} onChange={this.props.changeWeek} value={this.props.option} placeholder="Select an option" />
                <br />
                <h1>
                    {this.props.selectedWeek === null ?
                        <div>Week 1 Games </div> :
                        <div>{this.props.option} </div>}
                </h1>
                <br />
                <div className="schedule">
                    {this.props.selectedWeek === null ? weekOneGameCards : this.renderSelectedWk()}
                </div>
            </div >
        )
    }
}

export default Schedule