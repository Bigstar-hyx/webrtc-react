import React from 'react'
import UpLive from '../viewer/Uplive'
import OtherTalk from '../viewer/Othertalk'
import './Index.css'

function LiveIndex() {
  return (
    <div className="live">
      <UpLive />
      <OtherTalk />
    </div>
  )
}

export default LiveIndex
