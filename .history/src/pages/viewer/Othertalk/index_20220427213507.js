import ViewerList from './ViewerList'
import ViewerSend from './ViewerSend'
import Danmu from './Danmu'

import './index.css'

function OtherTalk() {
  return (
    <div className="other-talk">
      <div className="viewer-list">
        <p>房间动态</p>
        <ViewerList />
      </div>
      <div className="danmu">
        <Danmu />
      </div>
      <div className="viewer-send">
        <ViewerSend />
      </div>
    </div>
  )
}

export default OtherTalk
