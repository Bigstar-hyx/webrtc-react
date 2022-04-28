import './live-tool.css'

function LiveTool() {
  return (
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
    </div>
  )
}

export default LiveTool
