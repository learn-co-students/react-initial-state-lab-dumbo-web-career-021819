// your Bomb code here!
import React, { Component } from 'react'

class Bomb extends React.Component {

  state = {
    secondsLeft: this.props.initialCount
  }

  render(){
    return (this.state.secondsLeft === 0) ?
      'Boom!' :
    <div>{this.state.secondsLeft} seconds left before I go boom!</div>
  }
}

export default Bomb