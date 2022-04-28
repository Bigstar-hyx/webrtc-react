import { Avatar, Image } from 'antd'
import './index.css'

function ViewerList() {
  return (
    <div>
      <ul>
        <li>
          <Avatar src="https://joeschmoe.io/api/v1/random" />
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
