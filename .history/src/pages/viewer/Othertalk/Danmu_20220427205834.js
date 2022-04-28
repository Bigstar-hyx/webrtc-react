import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import './danmu.css'

function Danmu() {
  return (
    <div className="danmu-list">
      <ul>
        <li>
          <div className="danmu-div-left">
            <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
            <span>&nbsp;&nbsp;大星的小娇妻：</span>
          </div>
          <span className="danmu-span-right">第一</span>
        </li>
        <li>
          <div className="danmu-div-left">
            <Avatar style={{ backgroundColor: '#855de4' }} icon={<UserOutlined />} />
            <span>&nbsp;&nbsp;守护最好的大星：</span>
          </div>
          <span className="danmu-span-right">来了</span>
        </li>
        <li>
          <div className="danmu-div-left">
            <Avatar style={{ backgroundColor: '#1a94ff' }} icon={<UserOutlined />} />
            <span>&nbsp;&nbsp;游客12a0：</span>
          </div>
          <span className="danmu-span-right">姐姐好美</span>
        </li>
        <li>
          <div className="danmu-div-left">
            <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
            <span>&nbsp;&nbsp;游客0521：</span>
          </div>
          <span className="danmu-span-right">啦啦啦啦啦姐姐我来了～～～</span>
        </li>
        <li>
          <div className="danmu-div-left">
            <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
            <span>&nbsp;&nbsp;大星的小娇妻：</span>
          </div>
          <span className="danmu-span-right">第一</span>
        </li>
        <li>
          <div className="danmu-div-left">
            <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
            <span>&nbsp;&nbsp;大星的小娇妻：</span>
          </div>
          <span className="danmu-span-right">第一</span>
        </li>
        <li>
          <div className="danmu-div-left">
            <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
            <span>&nbsp;&nbsp;大星的小娇妻：</span>
          </div>
          <span className="danmu-span-right">第一</span>
        </li>
        <li>
          <div className="danmu-div-left">
            <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
            <span>&nbsp;&nbsp;大星的小娇妻：</span>
          </div>
          <span className="danmu-span--right">第一</span>
        </li>
        <li>
          <div className="danmu-div-left">
            <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
            <span>&nbsp;&nbsp;大星的小娇妻：</span>
          </div>
          <span className="danmu-span--right">第一</span>
        </li>
        <li>
          <div className="danmu-div-left">
            <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
            <span>&nbsp;&nbsp;大星的小娇妻：</span>
          </div>
          <span className="danmu-span--right">第一</span>
        </li>
      </ul>
    </div>
  )
}

export default Danmu
