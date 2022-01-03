import React from 'react'
import TalkList from './TalkList'
import TalkSend from './TalkSend'
import './talk.css'

function Talk() {
  return (
    <div>
      <div className="talk-list">
        <TalkList></TalkList>
      </div>
      <div className="talk-send">
        <TalkSend></TalkSend>
      </div>
    </div>
  )
}

export default Talk
