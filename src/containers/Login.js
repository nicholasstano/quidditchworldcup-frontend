import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

export class Login extends Component {

    state = { toggleLogin: true, username: "", password: "" }

    toggleLoginClick = () => {
        this.setState({ toggleLogin: !this.state.toggleLogin })
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSignupSubmit = e => {
        e.preventDefault()
        fetch('http://localhost:3000/users', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                if (data.id >= 1) {
                    this.props.setUser(data)
                    localStorage.setItem('userId', data.id)
                    this.props.history.push('/fantasy')
                }
                else {
                    alert("Username is already Taken")
                    this.props.history.push('/login')
                }
            })
        this.setState({
            username: "", password: ""
        })
    }

    handleLoginSubmit = e => {
        e.preventDefault()
        fetch('http://localhost:3000/login', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                if (data.id >= 1) {
                    localStorage.setItem('userId', data.id)
                    this.props.setUser(data)
                    this.props.setLeagues(data)
                    this.props.history.push('/fantasy')
                }
                else {
                    alert("Invalid Username Or Password")
                    this.props.history.push('/login')
                }
            })

        this.setState({
            username: '',
            password: ""
        })
    }

    signUpForm = () => {
        return (<div><button onClick={this.toggleLoginClick}>Have an Account Already? (Click to Login)</button>
            <br />
            <br />
            <form onSubmit={this.handleSignupSubmit}>
                <label>Username: </label>
                <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                <label>Password: </label>
                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                <button>Signup</button></form></div>)
    }
    loginForm = () => {
        return (<div><button onClick={this.toggleLoginClick}>Need to Create an Account? (Click to Signup)</button>
            <br />
            <br />
            <form onSubmit={this.handleLoginSubmit}>
                <label>Username: </label>
                <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                <label>Password: </label>
                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                <button>Login</button>
            </form></div>)
    }
    render() {
        return (
            <div>
                <h1>Welcome to Fantasy Sports Page! Please Login to Continue.</h1>
                {this.state.toggleLogin ?
                    this.loginForm() : this.signUpForm()}
            </div>
        )
    }
}

export default withRouter(Login)