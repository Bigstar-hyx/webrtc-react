import './live-tool.css'

function LiveTool() {
  return (
    <div>
      <div className="tool-title">
        <ul>
          <li>直播间标题</li>
          <li>
            <input type="text" />
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
