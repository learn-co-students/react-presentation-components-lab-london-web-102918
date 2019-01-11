// Code SimpleComponent Here
import React, { Component } from 'react'

class SimpleComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mood: 'happy',
    }
  }

  toggleMood = () => {
    let newMood = this.state.mood === 'happy' ? 'sad' : 'happy'
    this.setState({mood: newMood})
  }

  render() {
    return(
      <div onClick={this.toggleMood}>{ this.state.mood }</div>
    )
  }
}

export default SimpleComponent
