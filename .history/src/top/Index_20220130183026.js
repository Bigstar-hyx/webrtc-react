import { Avatar } from 'antd'
import { PlaySquareTwoTone, UserOutlined } from '@ant-design/icons'

import TopMenu from './component/TopMenu'
import TopSearch from './component/TopSearch'

import './index.css'

function TopIndex() {
  return (
    <>
      <div className="logo">
        <PlaySquareTwoTone twoToneColor="#0BB6F1" />
        &nbsp;Bigstar
      </div>
      <TopMenu />
      <TopSearch />
      <div>
        <Avatar size={64} icon={<UserOutlined />} />
      </div>
    </>
  )
}

export default TopIndex
