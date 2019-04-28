// your Bomb code here!
import React, {Component} from 'react'

class Bomb extends Component {
  state = {
    secondsLeft: this.props.initialCount
  }

  bombText = () => {
    if(this.state.secondsLeft === 0){
      return(<div>Boom!</div)
    }else{
      return(<div>{this.state.secondsLeft} seconds left before I go boom!</div>)
    }
  }


  render(){
    return (
        {this.bombText()}
    )
  }

}

export default Bomb;
