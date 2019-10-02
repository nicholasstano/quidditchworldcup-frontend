import React, { Component } from 'react'
import TeamsWhoMadeItCard from '../components/TeamsWhoMadeItCard'

export class TeamsWhoMadeIt extends Component {
    render() {
        return (
            <div className="teamsWhoMadeItContainer">
                <h1>Qualified Teams</h1>
                <div className="teamsWhoMadeIt">
                    {this.props.teams.map(team => <TeamsWhoMadeItCard key={team.id} {...team} />
                    )}
                </div>
            </div>
        )
    }
}

export default TeamsWhoMadeIt
