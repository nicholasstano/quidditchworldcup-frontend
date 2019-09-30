import React, { Component } from 'react'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

export class Roster extends Component {

    state = {
        selectedTeam: null,
        option: ""
    }

    changeTeam = (event) => {
        if (event.value) {
            let team = this.props.allTeams.filter(team => team.name === event.value)
            this.setState({ selectedTeam: team[0], option: event.value })
        }
    }

    render() {
        let firstTeam = []
        if (this.props.allTeams.length > 0) {
            firstTeam = this.props.allTeams.filter(team => team.name === "Argentina")[0]
        }

        const teamsNotAlphabetized = this.props.allTeams.map(team => team.name)
        const options = teamsNotAlphabetized.sort()

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
        return (
            <div className="rosters">
                <Dropdown options={options} onChange={this.changeTeam} value={this.state.option} placeholder="Select an option" />
                <br />
                {this.state.selectedTeam === null ?
                    (<div>
                        <div className="name-flag-schedule">
                            <div className="name-and-flag">
                                <center><h1>{firstTeam.name}</h1>
                                    <p>Record: ({firstTeam.wins} - {firstTeam.losses})</p>
                                    <p>Points For / Points Against: ({firstTeam.points_for} - {firstTeam.points_against})</p>
                                </center>                                <img src={firstTeam.flag} alt={firstTeam.name} />
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
                                <center><h1>{this.state.selectedTeam.name}</h1>
                                    <p>Record: ({this.state.selectedTeam.wins} - {this.state.selectedTeam.losses})</p>
                                    <p>Points For / Points Against: ({this.state.selectedTeam.points_for} - {this.state.selectedTeam.points_against})</p>
                                </center>
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