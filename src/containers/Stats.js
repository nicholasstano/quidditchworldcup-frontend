import React, { Component } from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

export class Stats extends Component {

    render() {
        const options = [
            'Chaser', 'Keeper', 'Seeker', 'Beater'
        ]
        const defaultOption = options[0]

        const data = [{
            name: 'Tanner John',
            team: "United States of America",
            games_played: 3,
            position: "Chaser",
            goals_scored: 9,
        },
        {
            name: 'Ivan Drago',
            team: "Russia",
            games_played: 3,
            position: "Chaser",
            goals_scored: 12,
        },
        {
            name: "Jimmy O'Connell",
            team: "Ireland",
            games_played: 3,
            position: "Chaser",
            goals_scored: 17,
        }
        ]

        const columns = [{
            Header: 'Name',
            accessor: 'name'
        },
        {
            Header: 'Team',
            accessor: 'team'
        },
        {
            Header: 'Games Played',
            accessor: 'games_played'
        },
        {
            Header: 'Quaffle Scored',
            accessor: 'goals_scored'
        }]
        return (
            <div className="stats">
                Position:
                <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />

                <ReactTable
                    data={data}
                    columns={columns}
                    defaultPageSize={50}
                />
            </div>
        )
    }
}

export default Stats
