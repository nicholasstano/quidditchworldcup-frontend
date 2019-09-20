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
        const roster_information = [{
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
        const schedule_information = [
            {
                Header: 'Week Id',
                accessor: 'week_id',
                show: false
            },
            {
                Header: 'Home Team',
                accessor: 'home_name'
            },
            {
                Header: 'Score',
                accessor: 'home_score',
                minWidth: 35

            },
            {
                Header: 'Away Team',
                accessor: 'away_name'
            },
            {
                Header: 'Score',
                accessor: 'away_score',
                minWidth: 35
            }
        ]
        console.log(firstTeam.schedule)
        return (
            <div className="rosters">
                <Dropdown options={options} onChange={this.changeTeam} value={defaultOption} placeholder="Select an option" />
                <br />
                {this.state.selectedTeam === null ?
                    (<div>
                        <div className="name-flag-schedule">
                            <div className="name-and-flag">
                                <h1>{firstTeam.name}</h1>
                                <img src={firstTeam.flag} alt={firstTeam.name} />
                            </div>
                            <div className="teams-schedule">
                                <ReactTable
                                    data={firstTeam.schedule}
                                    columns={schedule_information}
                                    defaultPageSize={14}
                                    defaultSorted={[{ id: "week_id", desc: false }]}
                                />
                            </div>
                        </div>
                        <br />
                        <ReactTable
                            data={firstTeam.player_roster}
                            columns={roster_information}
                            defaultPageSize={7}
                            defaultSorted={[{ id: "name", desc: false }]}
                        />
                    </div>) :
                    (<div>
                        <div className="name-flag-schedule">
                            <div className="name-and-flag">
                                <h1>{this.state.selectedTeam.name}</h1>
                                <img src={this.state.selectedTeam.flag} alt={this.state.selectedTeam.name} />
                            </div>
                            <div className="teams-schedule">
                                <ReactTable
                                    data={this.state.selectedTeam.schedule}
                                    columns={schedule_information}
                                    defaultPageSize={14}
                                    defaultSorted={[{ id: "week_id", desc: false }]}
                                />
                            </div>
                        </div>
                        <br />
                        <ReactTable
                            data={this.state.selectedTeam.player_roster}
                            columns={roster_information}
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