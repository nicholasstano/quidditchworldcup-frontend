import React, { Component } from 'react'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import ScheduleGameCard from '../components/ScheduleGameCard'

export class Schedule extends Component {

    state = {
        selectedWeek: null,
        option: "Week 1",
    }

    changeWeek = (event) => {
        if (event.value) {
            let weekGames = this.props.weeklyGames.filter(week => week.name === event.value)
            this.setState({ selectedWeek: weekGames })
            this.setState({ option: event.value })
        }
    }

    renderSelectedWk = () => {
        return this.state.selectedWeek[0].week_games.map(game =>
            < ScheduleGameCard updateGameCard={this.updateGameCard} key={game.game_id} {...game} />)
    }

    updateGameCard = (data) => {
        const newGameWeek = data.teamInfo
        let updatedWeek = this.state.selectedWeek[0].week_games.slice().map(weekGame => weekGame.game_id === newGameWeek.game_id ? newGameWeek : weekGame)
        this.setState({ selectedWeek: [{ ...this.state.selectedWeek, week_games: updatedWeek }] })
    }

    render() {
        let weekOneGameCards = []
        if (this.props.weeklyGames.length > 0) {
            let weekOneGames = this.props.weeklyGames.filter(week => week.name === "Week 1")
            weekOneGameCards = weekOneGames[0].week_games.map(game =>
                < ScheduleGameCard updateGameCard={this.updateGameCard} key={game.game_id} {...game} />)

        }
        const options = this.props.weeklyGames.map(week => week.name)
        return (
            <div onClick={this.changeWeek} className="schedule-with-dropdown">
                <Dropdown options={options} onChange={this.changeWeek} value={this.state.option} placeholder="Select an option" />
                <br />
                <h1>
                    {this.state.selectedWeek === null ? "Week 1 Games" : `${this.state.option} Games`}
                </h1>
                <br />
                <div className="schedule">
                    {this.state.selectedWeek === null ? weekOneGameCards : this.renderSelectedWk()}
                </div>
            </div>
        )
    }
}

export default Schedule