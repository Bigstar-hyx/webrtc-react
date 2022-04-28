import ViewerList from './ViewerList'
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
    </div>
  )
}

export default OtherTalk
