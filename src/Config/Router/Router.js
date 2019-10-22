import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, About,Contact} from '../../Container/index';
import {Donation} from './../../Component'

export default class BasicRouter extends React.Component {
    render() {
        return (
            <Router>
                <Route exact path="/" component={Home} />
                <Route  path="/About" component={About} />
                <Route  path="/Contact" component={Contact} />
                <Route  path="/donation" component={Donation} />

            </Router>
        )
    }
}