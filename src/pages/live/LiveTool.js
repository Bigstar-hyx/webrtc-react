import { Switch } from 'antd'
import './live-tool.css'

function LiveTool() {
  return (
    <div className="live-tool">
      <div className="tool-title">
        <ul>
          <li>
            直播间标题：
            <input type="text" placeholder="取个引人注目的标题吧～" />
          </li>
          <li>
            <button>同步标题</button>
          </li>
          <li>
            <button>封面设置</button>
          </li>
        </ul>
      </div>
      <div className="tool-debug">
        <div className="tool-debug-left">
          <ul>
            <li>
              <Switch />
              <p>🎙麦克风</p>
            </li>
            <li>
              <Switch />
              <p>📷摄像头</p>
            </li>
            <li>
              <Switch />
              <p>📺共享屏幕</p>
            </li>
          </ul>
        </div>
        <div className="tool-debug-right">
          <button> ● 录制</button>
          <button>开始直播</button>
        </div>
      </div>
    </div>
  )
}

export default LiveTool
