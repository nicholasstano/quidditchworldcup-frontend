import React, { Component } from 'react'


export class Playoffs extends Component {

    // state = {
    //     teamsInHunt: null
    // }

    // regularSeasonEnd = () => {
    //     if (this.props.weeklyGames.length > 0) {
    //         if (this.props.weeklyGames[13].games_completed === true) {
    //             fetch(`http://localhost:3000/weeks/top_sixteen`)
    //                 .then(res => res.json())
    //                 .then(teams => this.setState({ teamsInHunt: teams }))
    //             console.log(this.state.teamsInHunt)
    //         }
    //     }
    // }

    gamesCompleted = () => {
        if (this.props.weeklyGames[13].games_completed === true) {
            return this.props.weeklyGames[13].games_completed
        }
    }


    render() {
        return (
            <div>
                {this.gamesCompleted() ? <h1>Playoffs Coming Soon</h1> :
                    <div>
                        <h1>Playoff Bracket</h1>
                        <div className="brackets">
                            <h5>Round of Sixteen</h5>
                            <h5>Round of Eight</h5>
                            <h5>Semi Finals</h5>
                            <h5>Quidditch World Cup Finals</h5>
                            <h5>Winner</h5>

                        </div>
                        <div className="brackets">
                            <div className="round-of-sixteen">
                                <p>1. TeamNamePlaceHolder (Points)</p>
                                <p>16. TeamNamePlaceHolder (Points)</p>
                                <br />
                                <p>2. TeamNamePlaceHolder (Points)</p>
                                <p>15. TeamNamePlaceHolder (Points)</p>
                                <br />
                                <p>3. TeamNamePlaceHolder (Points)</p>
                                <p>14. TeamNamePlaceHolder (Points)</p>
                                <br />
                                <p>4. TeamNamePlaceHolder (Points)</p>
                                <p>13. TeamNamePlaceHolder (Points)</p>
                                <br />
                                <p>5. TeamNamePlaceHolder (Points)</p>
                                <p>12. TeamNamePlaceHolder (Points)</p>
                                <br />
                                <p>6. TeamNamePlaceHolder (Points)</p>
                                <p>11. TeamNamePlaceHolder (Points)</p>
                                <br />
                                <p>7. TeamNamePlaceHolder (Points)</p>
                                <p>10. TeamNamePlaceHolder (Points)</p>
                                <br />
                                <p>8. TeamNamePlaceHolder (Points)</p>
                                <p>9. TeamNamePlaceHolder (Points)</p>
                            </div>
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
                            </div>
                            <div className="round-of-four">
                                <p>#1 TeamNamePlaceHolder (Points)</p>
                                <p>#15 TeamNamePlaceHolder (Points)</p>
                                <br />
                                <p>#1 TeamNamePlaceHolder (Points)</p>
                                <p>#15 TeamNamePlaceHolder (Points)</p>
                                <br />
                            </div>
                            <div className="round-of-two">
                                <p>#1 TeamNamePlaceHolder (Points)</p>
                                <p>#15 TeamNamePlaceHolder (Points)</p>
                                <br />
                            </div>
                            <div className="winner">
                                <p>#1 TeamNamePlaceHolder (Points)</p>
                                <br />
                            </div>
                        </div>
                    </div>}
            </div >
        )
    }
}

export default Playoffs
