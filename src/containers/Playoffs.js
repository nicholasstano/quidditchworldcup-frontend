import React, { Component } from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

export class Standings extends Component {
    render() {
        const options = [
            'Division', 'League'
        ]
        const defaultOption = options[0]
        const data = [{
            team: "United States of America",
            games_played: 3,
            wins: 3,
            losses: 0,
            points_for: 600,
            points_against: 300
        },
        {
            team: "Canada",
            games_played: 3,
            wins: 2,
            losses: 1,
            points_for: 600,
            points_against: 400
        },
        {
            team: "Mexico",
            games_played: 3,
            wins: 1,
            losses: 2,
            points_for: 400,
            points_against: 600
        },
        {
            team: "Russia",
            games_played: 3,
            wins: 0,
            losses: 3,
            points_for: 400,
            points_against: 700
        },
        ]
        const columns = [{
            Header: 'Team',
            accessor: 'team'
        },
        {
            Header: 'Games Played',
            accessor: 'games_played'
        },
        {
            Header: 'Wins',
            accessor: 'wins'
        },
        {
            Header: 'Losses',
            accessor: 'losses'
        },
        {
            Header: 'Points For',
            accessor: 'points_for'
        },
        {
            Header: 'Points Against',
            accessor: 'points_against'
        }]
        return (
            <div>
                Standings:
                <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
                <ReactTable
                    data={data}
                    columns={columns}
                    defaultPageSize={32}
                />
            </div>
        )
    }
}

export default Standings
