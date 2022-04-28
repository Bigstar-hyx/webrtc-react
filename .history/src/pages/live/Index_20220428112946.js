import React, from 'react'
import './Index.css'
import UpLive from '../viewer'
import OtherTalk from '../viewer'

function LiveIndex() {
  return (
    <div className="live">
      <UpLive />
      <OtherTalk />
    </div>
  )
}

export default LiveIndex
