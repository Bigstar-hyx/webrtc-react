import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import './viewer-list.css'

function ViewerList() {
  return (
    <div className="viewer-list">
      <ul>
        <li>
          <div>
            <Avatar size="small" style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
            <span>&nbsp;&nbsp;大星的小娇妻</span>
          </div>
          <span className="span-right">加入房间</span>
        </li>
        <li>
          <span>守护最好的大星</span>
          <span className="span-right">加入房间</span>
        </li>
        <li>
          <span>一个未知名的守护者</span>
          <span className="span-right">退出房间</span>
        </li>
      </ul>
    </div>
  )
}

export default ViewerList
