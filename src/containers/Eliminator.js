import React, { Component } from 'react'
import Fantasy from '../containers/Fantasy'

export class Eliminator extends Component {

    render() {
        return (
            <div>
                {this.props.user ? <Fantasy user={this.props.user} setUser={this.props.setUser} /> : null}
                <h1>Welcome to Eliminator Pick Em</h1>
            </div>
        )
    }
}

export default Eliminator
