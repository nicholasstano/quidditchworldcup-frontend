import React, { Component } from 'react'

export class WinnerPlayoffGameCard extends Component {

    render() {
        return (
            <div>
                {this.props.name ?
                    <div className="winner-game-display">
                        <p><img src={this.props.flag} alt={this.props.name} />  {this.props.name}</p>
                    </div>
                    :
                    <div className="winner-game-display">

                    </div>
                }
            </div>
        )
    }
}

export default WinnerPlayoffGameCard
