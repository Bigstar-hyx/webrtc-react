import React from 'react'
import OtherTalk from '../viewer/Othertalk'
import LiveUp from './LiveUp'
import './index.css'

function LiveIndex() {
  return (
    <div className="live">
      <LiveUp />
      <OtherTalk />
    </div>
  )
}

export default LiveIndex
