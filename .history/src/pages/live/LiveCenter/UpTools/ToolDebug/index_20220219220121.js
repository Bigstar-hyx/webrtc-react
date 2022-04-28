import './index.css'
import { Switch } from 'antd'

function ToolDebug() {
  return (
    <div className="tool-debug">
      <div className="tool-debug-left">
        <ul>
          <li>
            <Switch />
            <p>麦克风</p>
          </li>
          <li>
            <Switch />
            <p>麦克风</p>
            摄像头
          </li>
          <li>
            <Switch />
            共享屏幕
          </li>
        </ul>
      </div>
      <div className="tool-debug-right">
        <button> ● 录制</button>
        <button>开始直播</button>
      </div>
    </div>
  )
}

export default ToolDebug
