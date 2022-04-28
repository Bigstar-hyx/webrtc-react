import React, { Component } from 'react'
import UpLive from './Uplive'
import OtherTalk from './Othertalk'

import './index.css'

export class ViewerIndex extends Component {
  render() {
    return (
      <div className="viewer">
        <UpLive />
        <OtherTalk />
      </div>
    )
  }
}

export default ViewerIndex
