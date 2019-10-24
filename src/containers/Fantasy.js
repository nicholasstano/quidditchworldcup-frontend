import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

export class Fantasy extends Component {

    handleLogout = e => {
        e.preventDefault();
        localStorage.removeItem("userId");
        this.props.setUser(null);
        this.props.history.push("/login");
    };

    render() {
        return (
            <div>
                <h1>Coming Soon, Weekly Pick Em, Eliminator Pick Em, Daily Fantasy</h1>
                <button onClick={this.handleLogout}>Log Out {this.props.user.username}</button><br /><br />
                {this.props.user.username ? <div>Welcome {this.props.user.username}!</div> : null}
            </div>
        )
    }
}

export default withRouter(Fantasy)