import { Layout, Avatar, Button } from 'antd'
import {
  HomeOutlined,
  TeamOutlined,
  UserOutlined,
  VideoCameraOutlined,
  AudioOutlined,
  AudioMutedOutlined,
  DesktopOutlined
} from '@ant-design/icons'
import 'antd/dist/antd.css'
import './header.css'

const { Header } = Layout

function Header() {
  return (
    <Header className="header">
      <div>
        <div className="logo">
          <img src="./jpklogo.png" alt="有道精品课" />
        </div>
        <ul>
          <li>
            <Button type="primary">开始直播</Button>
          </li>
          <li>
            <Button type="primary">前往学生端</Button>
          </li>
          <li>
            <Button>
              <HomeOutlined />
            </Button>
          </li>
          <li>
            <Button>
              <TeamOutlined />
            </Button>
          </li>
          <li>
            <Button>
              <AudioOutlined />
            </Button>
          </li>
          <li>
            <Button>
              <AudioMutedOutlined />
            </Button>
          </li>
          <li>
            <Button>
              <VideoCameraOutlined />
            </Button>
          </li>
          <li>
            <Button>
              <DesktopOutlined />
            </Button>
          </li>
        </ul>
        <div className="user">
          <a href="/#">
            <Avatar size={32} icon={<UserOutlined />} />
          </a>
        </div>
      </div>
    </Header>
  )
}

export default Header
