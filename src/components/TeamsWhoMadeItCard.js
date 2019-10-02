import React, { Component } from 'react'

export class TeamsWhoMadeItCard extends Component {
    render() {
        return (
            <div>
                <div key={this.props.id} >
                    <h5>{this.props.name}</h5>
                    <img className="teamsWhoMadeItImg" src={this.props.flag} alt={`${this.props.name} flag`} />
                </div>
            </div>
        )
    }
}

export default TeamsWhoMadeItCard
