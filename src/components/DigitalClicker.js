// Code DigitalClicker Component Here
import React from 'react'

class DigitalClicker extends React.Component {
  constructor() {
    super();
    this.state = {
      timesClicked: 0
    }
  }

  updateTimes = (event) => {
    this.setState ({
      timesClicked: ++this.state.timesClicked
    })
  }

  render() {
    return(
      <button onClick={this.updateTimes}>
      {this.state.timesClicked}
      </button>
    )
  }
}

export default DigitalClicker
