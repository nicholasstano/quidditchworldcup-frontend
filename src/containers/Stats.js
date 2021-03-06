import React, { Component } from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

export class Stats extends Component {

    state = {
        selectedPosition: null,
        option: "Chaser",
        statsToggle: true,
    }

    toggleStats = () => {
        this.setState({ statsToggle: !this.state.statsToggle })
    }

    componentDidMount() {
        fetch(`http://localhost:3000/players`)
            .then(res => res.json())
            .then(data => {
                this.props.updateStats(data)
            }
            )
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

        const regularSeasonColumns = [{
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
        const playoffColumns = [{
            Header: 'Name',
            accessor: 'name'
        },
        {
            Header: 'Team',
            accessor: 'team_name'
        },
        {
            Header: 'Quaffle Scored',
            accessor: 'quaffle_scored_playoffs',
            minWidth: 50
        },
        {
            Header: 'Snitch Captured',
            accessor: 'snitch_captured_playoffs',
            minWidth: 50
        },
        {
            Header: 'Quaffle Saved',
            accessor: 'quaffle_saved_playoffs',
            minWidth: 50
        },
        {
            Header: 'Bludgers Smashed',
            accessor: 'bludgers_smashed_playoffs',
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
                            columns={regularSeasonColumns}
                            defaultPageSize={96}
                            defaultSorted={[{ id: "quaffle_scored", desc: true }, { id: "snitch_captured", desc: true }, { id: "quaffle_saved", desc: true }, { id: "bludgers_smashed", desc: true }, { id: "name", desc: false }]}
                        />
                    ) :
                    (
                        <div>
                            <div className="buttons">
                                {this.state.statsToggle ? <button onClick={this.toggleStats}>Playoff Stats</button> :
                                    <button onClick={this.toggleStats}>Regular Season Stats</button>}
                            </div>
                            {this.state.statsToggle ?
                                <ReactTable
                                    data={this.state.selectedPosition}
                                    columns={regularSeasonColumns}
                                    defaultPageSize={96}
                                    defaultSorted={[{ id: "quaffle_scored", desc: true }, { id: "snitch_captured", desc: true }, { id: "quaffle_saved", desc: true }, { id: "bludgers_smashed", desc: true }, { id: "name", desc: false }]}
                                /> :
                                <ReactTable
                                    data={this.state.selectedPosition}
                                    columns={playoffColumns}
                                    defaultPageSize={96}
                                    defaultSorted={[{ id: "quaffle_scored_playoffs", desc: true }, { id: "snitch_captured_playoffs", desc: true }, { id: "quaffle_saved_playoffs", desc: true }, { id: "bludgers_smashed_playoffs", desc: true }, { id: "name", desc: false }]}
                                />}
                        </div>
                    )
                }
            </div>
        )
    }
}

export default Stats