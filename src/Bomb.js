// your Bomb code here!
import React from "react";

class Bomb extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
        secondsLeft: this.props.initialCount
        }
    }

    

    render() {
        let message;

        if (this.state.secondsLeft > 0) {
            message = this.state.secondsLeft + ' seconds left before I go boom!'
        } else {
            message = 'Boom!'
        }
        return (
            <div>
                {message}
            </div>
        )
    }
}

export default Bomb;