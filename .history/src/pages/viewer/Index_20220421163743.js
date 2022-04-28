import React, { Component } from 'react'
import UpLive from './Uplive'

import './index.css'

export class ViewerIndex extends Component {
  render() {
    return (
      <div className="viewer">
        <UpLive />
      </div>
    )
  }
}

export default ViewerIndex
