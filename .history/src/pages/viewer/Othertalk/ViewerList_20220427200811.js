import { Avatar, Image } from 'antd'
import './viewer-list.css'

function ViewerList() {
  return (
    <div className="viewer-list">
      <ul>
        <li>
          <Avatar src="https://joeschmoe.io/api/v1/random" />
          <span>zhangsan</span>
        </li>
        <li>
          <Avatar src="https://joeschmoe.io/api/v1/random" />
        </li>
        <li>
          <Avatar src="https://joeschmoe.io/api/v1/random" />
        </li>
      </ul>
    </div>
  )
}

export default ViewerList
