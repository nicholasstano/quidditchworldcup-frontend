import React, { Component } from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

export class Standings extends Component {

    state = {
        filteredDivision: null,
        option: "League Standings"
    }

    componentDidMount() {
        fetch(`http://localhost:3000/teams`)
            .then(res => res.json())
            .then(data => {
                this.props.updateStandingsAndRosters(data)
            }
            )
    }

    changeDivision = (event) => {
        if (event.value === "League Standings") {
            let allTeams = this.props.allTeams.map(team => team)
            this.setState({ filteredDivision: allTeams })
            this.setState({ option: "League Standings" })
        }
        else if (event.value === "Playoff Teams") {
            let allTeams = this.props.allTeams.map(team => team)
            let orderedTeams = allTeams.sort(function (teamA, teamB) {
                let winner = teamB.wins - teamA.wins;
                if (winner)
                    return winner
                let pointsForTie = teamB.points_for - teamA.points_for
                if (pointsForTie)
                    return pointsForTie
            })
            let playoffTeams = orderedTeams.slice(0, 16).map(team => team)
            this.setState({ filteredDivision: playoffTeams })
            this.setState({ option: "Playoff Teams" })
        }
        else if (event.value) {
            let divisionTeams = this.props.allTeams.filter(team => team.division === event.value).map(team => team)
            this.setState({ filteredDivision: divisionTeams, option: event.value })
        }
    }

    render() {
        let allTeams = this.props.allTeams.map(team => team)

        const options = [
            'League Standings', 'Playoff Teams', 'Asia', 'The Americas and Oceania', "Europe", "Africa and Western Asia"
        ]

        const columns = [{
            Header: 'National Team Name',
            accessor: 'name'
        },
        {
            Header: 'Games',
            accessor: 'games_played',
            minWidth: 30
        },
        {
            Header: 'Wins',
            accessor: 'wins',
            minWidth: 30
        },
        {
            Header: 'Losses',
            accessor: 'losses',
            minWidth: 30
        },
        {
            Header: 'Points For',
            accessor: 'points_for',
            minWidth: 30
        },
        {
            Header: 'Points Against',
            accessor: 'points_against',
            minWidth: 30
        }]
        return (
            <div className="standings">
                <Dropdown options={options} value={`Division: ${this.state.option}`} placeholder="League Standings" onChange={this.changeDivision} />
                <br />
                {this.state.filteredDivision === null ? (
                    <div>
                        <ReactTable
                            data={allTeams}
                            columns={columns}
                            defaultPageSize={32}
                            defaultSorted={[{ id: "wins", desc: true }, { id: "points_for", desc: true }, { id: "points_against", desc: false }]}
                        />
                    </div>
                ) :
                    (
                        <div>
                            <ReactTable
                                data={this.state.filteredDivision}
                                columns={columns}
                                defaultPageSize={32}
                                defaultSorted={[{ id: "wins", desc: true }, { id: "points_for", desc: true }, { id: "points_against", desc: false }]}
                            />
                        </div>
                    )}
            </div>
        )
    }
}

export default Standings