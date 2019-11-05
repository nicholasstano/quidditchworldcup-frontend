import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

export class Fantasy extends Component {

    handleLogout = e => {
        e.preventDefault();
        localStorage.removeItem("userId");
        this.props.setUser(null);
        this.props.history.push("/login");
    };

    render() {
        const userEliminatorLeagues = this.props.userEliminatorLeagues.map(league => league)
        const columns = [{
            Header: 'Eliminator League Name',
            accessor: 'name'
        }]
        return (
            <div >
                <div className="fantasy-navBar">
                    <h5 className="fantasy-link"> Username: {this.props.user.user.username}</h5>
                    <Link className="fantasy-link" to="/fantasy">Fantasy Home</Link>
                    <h5 className="fantasy-link" onClick={this.handleLogout}>Log Out </h5>
                    <Link className="fantasy-link" to="/eliminator">Eliminator</Link>
                    <Link className="fantasy-link" to="/home" >Weekly Pick 'Em</Link>
                    <Link className="fantasy-link" to="/home" >Daily Fantasy</Link>
                </div >
                <div className="fantasy-leagues">
                    <ReactTable
                        data={userEliminatorLeagues}
                        columns={columns}
                        defaultPageSize={5}
                    // defaultSorted={[{ id: "wins", desc: true }, { id: "points_for", desc: true }, { id: "points_against", desc: false }]}
                    />
                </div>
            </div>
        )
    }
}

export default withRouter(Fantasy)