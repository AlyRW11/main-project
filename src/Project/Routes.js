import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import AbtMe from './Personal.js'
import Resume from './Resume.js'
import Pro from './Projects.js'
import Test from './Testing.js'
// import TestTwo from './TestTwo.js'


class Routes extends Component {
    render (){
        return(
            <Router>
                <div>
            <nav>
                <Link to="/">About Me </Link>
                <Link to="/resume">Resume </Link>
                <Link to="/projects">Projects </Link>
                <Link to="/Test">Test</Link>
                {/* <Link to="/TestTwo">Test 2 </Link> */}
            </nav>
            <Route exact path="/" component={AbtMe}/>
            <Route path="/resume" component={() => <Resume/>}/>
            {/* if you do {() => <“something”/>}/> then it will run props */}
            <Route path="/projects" component={() => <Pro/>}/>
            <Route path="/test" component={() => <Test/>}/>
            {/* <Route path="/testTwo" component={() => <TestTwo/>}/> */}
                </div>
            </Router>
            


        )
    }
}

export default Routes