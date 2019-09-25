import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Home extends Component {

    state = {
        counter: null
    }

    render() {
        return (
            <div className="home">
                <div className="home-sidebar">
                    <h5>Stories</h5>
                    <p><Link to="/standings">431st Quidditch World Cup: The Teams who Made it</Link></p>
                    <p><Link to="/firebolt">Quidditch World Cup Teams are a Proud Partner of the Firebolt Broomstick</Link></p>
                    <p><Link to="/home">Recapping the 422nd Quidditch World Cup</Link></p>
                    <p><Link to="/stats">Tournament Statistical Leaders</Link></p>
                </div>
                <div className="home-story" >
                    <h2>Quidditch: The Most Popular Sport in the Wizarding World.</h2>
                    <img src="https://vignette.wikia.nocookie.net/harrypotter/images/f/fd/QWC.png/revision/latest?cb=20161023220629" alt="QWC LOGO" />
                    <h4>Thirty Two teams compete in 2030 and one team looks to join previous Quidditch World Cup Winners Australia (1966), Syria (1974), Canada (1990), Ireland (1994), Malawi (1998), Egypt (2002), Burkina Faso (2006), Moldova (2010), Bulgaria (2014) and many others!</h4>
                </div>
            </div >
        )
    }
}

export default Home
