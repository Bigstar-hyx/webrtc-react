import React from 'react'

import UpLive from '../viewer'
import OtherTalk from '../viewer'
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
