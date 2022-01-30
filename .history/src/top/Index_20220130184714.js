import { Avatar } from 'antd'
import { PlaySquareTwoTone, UserOutlined } from '@ant-design/icons'

import TopMenu from './component/TopMenu'
import TopSearch from './component/TopSearch'
import TopStart from './component/TopStart'

import './index.css'

function TopIndex() {
  return (
    <>
      <div className="logo">
        <PlaySquareTwoTone twoToneColor="#1990FF" />
        &nbsp;Bigstar
      </div>
      <TopMenu />
      <TopSearch />
      <div className="avatar">
        <Avatar size={32} icon={<UserOutlined />} />
      </div>
      <TopStart />
    </>
  )
}

export default TopIndex
