import React, { Component } from 'react'
import PropTypesDefinitions from "prop-types"
// import Particles from 'react-particles-js'
// import './Testing.css'

class TestTwo extends Component {
  constructor(){
    super()
    this.state = {
      name:"Aly R. Wayne"
    }
  }


  render(){
    return(
      <div>
        name should be here
        {this.state.message}
      </div>
    )
  }
}

TestTwo.propTypes = {
  content: PropTypesDefinitions.string,
  interests: PropTypesDefinitions.string.isRequired
}

export default TestTwo