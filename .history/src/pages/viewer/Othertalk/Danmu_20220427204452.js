import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import './danmu.css'

function Danmu() {
  return (
    <div>
      <ul>
        <li>
          <div className="div-left">
            <Avatar size="small" style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
            <span>&nbsp;&nbsp;大星的小娇妻</span>
          </div>
          <span className="span-right">加入房间</span>
        </li>
        <li>
          <div className="div-left">
            <Avatar size="small" style={{ backgroundColor: '#855de4' }} icon={<UserOutlined />} />
            <span>&nbsp;&nbsp;守护最好的大星</span>
          </div>
          <span className="span-right">加入房间</span>
        </li>
        <li>
          <div className="div-left">
            <Avatar size="small" style={{ backgroundColor: '#1a94ff' }} icon={<UserOutlined />} />
            <span>&nbsp;&nbsp;一个未知名的守护者</span>
          </div>
          <span className="span-right">退出房间</span>
        </li>
      </ul>
    </div>
  )
}

export default Danmu
