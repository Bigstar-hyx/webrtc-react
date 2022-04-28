import './index.css'

function ToolTitle() {
  return (
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
  )
}

export default ToolTitle
