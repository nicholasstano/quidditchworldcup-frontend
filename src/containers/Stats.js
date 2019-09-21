import React, { Component } from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

export class Stats extends Component {

    state = {
        selectedPosition: null,
        option: "Chaser"
    }

    changePosition = (event) => {
        if (event.value) {
            let position = this.props.allPlayers.filter(player => player.position === event.value)
            this.setState({ selectedPosition: position })
            this.setState({ option: event.value })
        }
    }

    render() {
        let chasers = this.props.allPlayers.filter(player => player.position === "Chaser")
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
            accessor: 'team_name'
        },
        {
            Header: 'Quaffle Scored',
            accessor: 'quaffle_scored',
            minWidth: 50
        },
        {
            Header: 'Snitch Captured',
            accessor: 'snitch_captured',
            minWidth: 50
        },
        {
            Header: 'Quaffle Saved',
            accessor: 'quaffle_saved',
            minWidth: 50
        },
        {
            Header: 'Bludgers Smashed',
            accessor: 'bludgers_smashed',
            minWidth: 50
        }
        ]
        return (
            <div className="stats">
                <Dropdown options={options} onChange={this.changePosition} value={`Position: ${this.state.option}`} placeholder="Select an option" />
                <br />
                {this.state.selectedPosition === null ?
                    (
                        <ReactTable
                            data={chasers}
                            columns={columns}
                            defaultPageSize={96}
                            defaultSorted={[{ id: "quaffle_scored", desc: true }, { id: "snitch_captured", desc: true }, { id: "quaffle_saved", desc: true }, { id: "bludgers_smashed", desc: true }, { id: "name", desc: false }]}
                        />
                    ) :
                    (
                        <ReactTable
                            data={this.state.selectedPosition}
                            columns={columns}
                            defaultPageSize={96}
                            defaultSorted={[{ id: "quaffle_scored", desc: true }, { id: "snitch_captured", desc: true }, { id: "quaffle_saved", desc: true }, { id: "bludgers_smashed", desc: true }, { id: "name", desc: false }]}
                        />
                    )
                }
            </div>
        )
    }
}

export default Stats