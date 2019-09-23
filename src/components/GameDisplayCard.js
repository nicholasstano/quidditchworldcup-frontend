import React, { Component } from 'react'

export class GameDisplayCard extends Component {

    sendResults = () => {
        fetch(`http://localhost:3000/games/${this.props.game_id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json",
                "accept": "application/json"
            },
        }).then(res => res.json()).then(data => {
            this.props.updateGameCard(data)
        })
    }

    render() {
        return (
            <div >
                <div className="home-game-display" onDrag={this.sendResults}>
                    <p><img src={this.props.away_flag} alt={this.props.away_name} /> {this.props.away_name}: {this.props.away_score}</p>
                    <p><img src={this.props.home_flag} alt={this.props.home_name} /> {this.props.home_name}: {this.props.home_score}</p>
                </div>
            </div>
        )
    }
}

export default GameDisplayCard