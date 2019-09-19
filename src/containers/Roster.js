import React, { Component } from 'react'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

export class Roster extends Component {

    state = {
        selectedTeam: null
    }

    changeTeam = (event) => {
        if (event.value) {
            let team = this.props.allTeams.filter(team => team.name === event.value)
            this.setState({ selectedTeam: team[0] })
        }
    }

    render() {
        let firstTeam = []
        if (this.props.allTeams.length > 0) {
            firstTeam = this.props.allTeams.filter(team => team.name === "Arab Republic of Egypt")[0]
        }

        const teamsNotAlphabetized = this.props.allTeams.map(team => team.name)
        const options = teamsNotAlphabetized.sort()
        const defaultOption = options[0]

        const data = [{
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
            Header: 'Quaffle Scored',
            // accessor: 'goals_scored',
            minWidth: 50
        },
        {
            Header: 'Snitch Captured',
            // accessor: 'snitch_caught',
            minWidth: 50
        },
        {
            Header: 'Quaffle Saved',
            // accessor: 'saves',
            minWidth: 50
        },
        {
            Header: 'Bludgers Smashed',
            // accessor: 'bludgers_smashed',
            minWidth: 50
        }
        ]

        return (
            <div className="rosters">
                <Dropdown options={options} onChange={this.changeTeam} value={defaultOption} placeholder="Select an option" />
                {this.state.selectedTeam === null ?
                    (<div>
                        <h1>{firstTeam.name}</h1>
                        <img src={firstTeam.flag} alt={firstTeam.name} />
                        <br />
                        <ReactTable
                            data={firstTeam.player_roster}
                            columns={columns}
                            defaultPageSize={7}
                            defaultSorted={[{ id: "name", desc: false }]}
                        />
                    </div>) :
                    (<div>
                        <h1>{this.state.selectedTeam.name}</h1>
                        <img src={this.state.selectedTeam.flag} alt={this.state.selectedTeam.name} />
                        <br />
                        <ReactTable
                            data={this.state.selectedTeam.player_roster}
                            columns={columns}
                            defaultPageSize={7}
                            defaultSorted={[{ id: "name", desc: false }, { id: "points_for", desc: true }]}
                        />
                    </div>
                    )
                }
            </div>
        )
    }
}

export default Roster