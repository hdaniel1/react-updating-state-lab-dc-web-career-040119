// Code YouTubeDebugger Component Here
import React from 'react'

class YouTubeDebugger extends React.Component {
  constructor() {
    super()
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
        resolution: '1080p'
        }
      }
    }
  }

  changeBitrate = (event) => {
    this.setState({
      settings:{
      ...this.state.settings,
      bitrate: 12
    }
    })
  }

  changeResolution = (event) => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
    }
  }, () => console.log(this.state))
  }

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.changeBitrate}>
        </button>
        <button className="resolution" onClick={this.changeResolution}>
        </button>
      </div>
    )
  }
}

export default YouTubeDebugger
