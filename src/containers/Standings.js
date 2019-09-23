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

    changeDivision = (event) => {
        if (event.value === "League Standings") {
            let allTeams = this.props.allTeams.map(team => team)
            this.setState({ filteredDivision: allTeams })
            this.setState({ option: "League Standings" })
        }
        else if (event.value) {
            let divisionTeams = this.props.allTeams.filter(team => team.division === event.value).map(team => team)
            this.setState({ filteredDivision: divisionTeams })
            this.setState({ option: event.value })
        }
    }

    render() {
        let allTeams = this.props.allTeams.map(team => team)

        const options = [
            'League Standings', 'Asia', 'The Americas and Oceania', "Europe", "Africa and Western Asia"
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
                            defaultSorted={[{ id: "wins", desc: true }, { id: "points_for", desc: true }]}
                        />
                    </div>
                ) :
                    (
                        <div>
                            <ReactTable
                                data={this.state.filteredDivision}
                                columns={columns}
                                defaultPageSize={32}
                                defaultSorted={[{ id: "wins", desc: true }, { id: "points_for", desc: true }]}
                            />
                        </div>
                    )}
            </div>
        )
    }
}

export default Standings