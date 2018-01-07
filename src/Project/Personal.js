import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import './Personal.css'

class AbtMe extends Component {
  
    render() {
      return (
        <div className="container">
                
          <main class="box">
            <img src="https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-9/26112279_10155249000575686_4928591881282476383_n.jpg?oh=8613a2ebb2bddadc99ddbd8e40ef0d59&oe=5AB23166" alt="" />
            <h1 class="name">Aly R. Wayne</h1>
           <div class="abt-me"> 
          <p>
            I am 28 years old. Currently working for Verizon Wireless as a 
            Global Enterprise Advisor. 
          </p>
          <p>
              Some of my interest are:
          </p>
          <ul>
              <li>Video Games</li>
              <li>Off-Roading</li>
              <li>Watching new moives</li>
          </ul> 
          </div>
          </main>   
        </div>
      );
    }
  }
  
  export default AbtMe