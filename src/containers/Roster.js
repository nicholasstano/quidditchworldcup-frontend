import React, { Component } from 'react'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

export class Roster extends Component {
    render() {
        const options = [
            'Canada', 'United States of America'
        ]
        const defaultOption = options[0]

        const data = [{
            name: 'Tanner John',
            games_played: 3,
            position: "Chaser",
            goals_scored: 9,
            saves: 0,
            snitch_caught: 0,
            bludgers_smashed: 0
        },
        {
            name: 'Wilemenia Red',
            games_played: 3,
            position: "Chaser",
            goals_scored: 12,
            saves: 0,
            snitch_caught: 0,
            bludgers_smashed: 0
        },
        {
            name: 'Rhonda Traver',
            games_played: 3,
            position: "Chaser",
            goals_scored: 14,
            saves: 0,
            snitch_caught: 0,
            bludgers_smashed: 0
        },
        {
            name: 'Boris Green',
            games_played: 3,
            position: "Keeper",
            goals_scored: 0,
            saves: 15,
            snitch_caught: 0,
            bludgers_smashed: 0
        },
        {
            name: 'Paula Kaplan',
            games_played: 3,
            position: "Beater",
            goals_scored: 0,
            saves: 0,
            snitch_caught: 0,
            bludgers_smashed: 15
        },
        {
            name: 'Blue James',
            games_played: 3,
            position: "Beater",
            goals_scored: 0,
            saves: 0,
            snitch_caught: 0,
            bludgers_smashed: 21
        },
        {
            name: 'Yolanda Bird',
            games_played: 3,
            position: "Seeker",
            goals_scored: 0,
            saves: 0,
            snitch_caught: 2,
            bludgers_smashed: 0
        }
        ]
        const columns = [{
            Header: 'Name',
            accessor: 'name'
        },
        {
            Header: 'Position',
            accessor: 'position'
        },
        {
            Header: 'Games Played',
            accessor: 'games_played'
        },
        {
            Header: 'Quaffle Scored',
            accessor: 'goals_scored'
        },
        {
            Header: 'Snitch Captured',
            accessor: 'snitch_caught'
        },
        {
            Header: 'Quaffle Saved',
            accessor: 'saves'
        },
        {
            Header: 'Bludgers Smashed',
            accessor: 'bludgers_smashed'
        }
        ]
        return (
            <div className="rosters">
                <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
                <h1>United States of America</h1>
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/250px-Flag_of_the_United_States.svg.png" alt="image USA" />
                <br />
                <ReactTable
                    data={data}
                    columns={columns}
                    defaultPageSize={7}
                />
            </div>
        )
    }
}

export default Roster