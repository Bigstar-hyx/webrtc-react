import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import './viewer-list.css'

function ViewerList() {
  return (
    <div className="viewer-list">
      <ul>
        <li>
          <Avatar size="small" icon={<UserOutlined />} />
          <span>大星的小娇妻</span>
          <span>加入房间</span>
        </li>
        <li>
          <span>守护最好的大星</span>
          <span>加入房间</span>
        </li>
        <li>
          <span>一个未知名的守护者</span>
          <span>退出房间</span>
        </li>
      </ul>
    </div>
  )
}

export default ViewerList
