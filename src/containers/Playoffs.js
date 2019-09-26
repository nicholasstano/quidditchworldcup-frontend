import React, { Component } from 'react'


export class Playoffs extends Component {

    playoffGames = () => {
        if (this.props.weeklyGames.length > 0) {
            let lastWeek = this.props.weeklyGames.slice(13, 14)
            let weekComplete = lastWeek[0].week_games.filter(game => game.game_completed === false)
            return true
        }
        else {
            return false
        }
    }



    render() {

        return (
            <div>
                {this.props.weeklyGame === null ? <h1>Loading</h1> :
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
                            {this.props.playoffTeams.length > 0 ?
                                <div className="round-of-sixteen">
                                    <p>1. {this.props.playoffTeams[0].name}</p>
                                    <p> <img src={this.props.playoffTeams[0].flag} alt={this.props.playoffTeams[0].name} /></p>
                                    <p>16. {this.props.playoffTeams[15].name}</p>
                                    <p> <img src={this.props.playoffTeams[15].flag} alt={this.props.playoffTeams[15].name} /></p>
                                    <br />
                                    <p>2. {this.props.playoffTeams[1].name}</p>
                                    <p> <img src={this.props.playoffTeams[1].flag} alt={this.props.playoffTeams[1].name} /></p>
                                    <p>15. {this.props.playoffTeams[14].name}</p>
                                    <p> <img src={this.props.playoffTeams[14].flag} alt={this.props.playoffTeams[14].name} /></p>
                                    <br />
                                    <p>3. {this.props.playoffTeams[2].name}</p>
                                    <p> <img src={this.props.playoffTeams[2].flag} alt={this.props.playoffTeams[2].name} /></p>
                                    <p>14. {this.props.playoffTeams[13].name}</p>
                                    <p> <img src={this.props.playoffTeams[13].flag} alt={this.props.playoffTeams[13].name} /></p>
                                    <br />
                                    <p>4. {this.props.playoffTeams[3].name}</p>
                                    <p> <img src={this.props.playoffTeams[3].flag} alt={this.props.playoffTeams[3].name} /></p>
                                    <p>13. {this.props.playoffTeams[12].name}</p>
                                    <p> <img src={this.props.playoffTeams[12].flag} alt={this.props.playoffTeams[12].name} /></p>
                                    <br />
                                    <p>5. {this.props.playoffTeams[4].name}</p>
                                    <p> <img src={this.props.playoffTeams[4].flag} alt={this.props.playoffTeams[4].name} /></p>
                                    <p>12. {this.props.playoffTeams[11].name}</p>
                                    <p> <img src={this.props.playoffTeams[11].flag} alt={this.props.playoffTeams[11].name} /></p>
                                    <br />
                                    <p>6. {this.props.playoffTeams[5].name}</p>
                                    <p> <img src={this.props.playoffTeams[5].flag} alt={this.props.playoffTeams[5].name} /></p>
                                    <p>11. {this.props.playoffTeams[10].name}</p>
                                    <p> <img src={this.props.playoffTeams[10].flag} alt={this.props.playoffTeams[10].name} /></p>
                                    <br />
                                    <p>7. {this.props.playoffTeams[6].name}</p>
                                    <p> <img src={this.props.playoffTeams[6].flag} alt={this.props.playoffTeams[6].name} /></p>
                                    <p>10. {this.props.playoffTeams[9].name}</p>
                                    <p> <img src={this.props.playoffTeams[9].flag} alt={this.props.playoffTeams[9].name} /></p>
                                    <br />
                                    <p>8. {this.props.playoffTeams[7].name}</p>
                                    <p> <img src={this.props.playoffTeams[7].flag} alt={this.props.playoffTeams[7].name} /></p>
                                    <p>9. {this.props.playoffTeams[8].name}</p>
                                    <p> <img src={this.props.playoffTeams[8].flag} alt={this.props.playoffTeams[8].name} /></p>
                                </div>
                                : <p>Round 1</p>}
                            {this.props.playoffTeams.length > 0 ?
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
                            {this.props.playoffTeams.length > 0 ?
                                <div className="round-of-four">
                                    <p>#1 TeamNamePlaceHolder (Points)</p>
                                    <p>#15 TeamNamePlaceHolder (Points)</p>
                                    <br />
                                    <p>#1 TeamNamePlaceHolder (Points)</p>
                                    <p>#15 TeamNamePlaceHolder (Points)</p>
                                    <br />
                                </div> :
                                <p>Round 3</p>}
                            {this.props.playoffTeams.length > 0 ?
                                <div className="round-of-two">
                                    <p>#1 TeamNamePlaceHolder (Points)</p>
                                    <p>#15 TeamNamePlaceHolder (Points)</p>
                                    <br />
                                </div> :
                                <p>Round 4</p>}
                            {this.props.playoffTeams.length > 0 ?
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
