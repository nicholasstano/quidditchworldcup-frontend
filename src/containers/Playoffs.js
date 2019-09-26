import React, { Component } from 'react'
import PlayoffGameCard from '../components/PlayoffGameCard'

export class Playoffs extends Component {

    componentDidMount() {
        fetch(`http://localhost:3000/playoff_games/roundOneGames`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "accept": "application/json"
            },
        }).
            then(res => res.json()).
            then(data => { this.props.updateRoundOneGames(data) }
            )
    }

    renderRoundOneGames = () => {
        return this.props.roundOneGames.map(game =>
            <PlayoffGameCard {...game} key={game.teamInfo.playoff_game_id} updateRoundOneGameCard={this.props.updateRoundOneGameCard} />)
    }

    render() {
        return (
            <div>
                {this.props.weeklyGames === null ? <h1>Loading</h1> :
                    <div>
                        <h1>Playoff Bracket </h1>
                        <div className="brackets">
                            <h5>Round of Sixteen</h5>
                            <h5>Round of Eight</h5>
                            <h5>Semi Finals</h5>
                            <h5>Quidditch World Cup Finals</h5>
                            <h5>Winner</h5>
                        </div>
                        <div className="brackets">
                            {this.props.roundOneGames.length > 0 ?
                                <div className="round-of-sixteen">
                                    {this.renderRoundOneGames()}
                                </div>
                                : <p>Round 1</p>}
                            {this.props.weeklyGames ?
                                <div className="round-of-eight">
                                    <p>#1 TeamNamePlaceHolder (Points)</p>
                                    <p>#15 TeamNamePlaceHolder (Points)</p>
                                    <br />
                                    <p>#1 TeamNamePlaceHolder (Points)</p>
                                    <p>#15 TeamNamePlaceHolder (Points)</p>
                                    <br />
                                    <p>#1 TeamNamePlaceHolder (Points)</p>
                                    <p>#15 TeamNamePlaceHolder (Points)</p>
                                    <br />
                                    <p>#1 TeamNamePlaceHolder (Points)</p>
                                    <p>#15 TeamNamePlaceHolder (Points)</p>
                                    <br />
                                </div> :
                                <p>Round 2</p>}
                            {this.props.weeklyGames ?
                                <div className="round-of-four">
                                    <p>#1 TeamNamePlaceHolder (Points)</p>
                                    <p>#15 TeamNamePlaceHolder (Points)</p>
                                    <br />
                                    <p>#1 TeamNamePlaceHolder (Points)</p>
                                    <p>#15 TeamNamePlaceHolder (Points)</p>
                                    <br />
                                </div> :
                                <p>Round 3</p>}
                            {this.props.weeklyGames > 0 ?
                                <div className="round-of-two">
                                    <p>#1 TeamNamePlaceHolder (Points)</p>
                                    <p>#15 TeamNamePlaceHolder (Points)</p>
                                    <br />
                                </div> :
                                <p>Round 4</p>}
                            {this.props.weeklyGames > 0 ?
                                <div className="winner">
                                    <p>#1 TeamNamePlaceHolder (Points)</p>
                                    <br />
                                </div> :
                                <p>Round 5</p>}
                        </div>
                    </div>
                }
            </div >
        )
    }
}

export default Playoffs