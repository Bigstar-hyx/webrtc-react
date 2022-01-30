// import { PlaySquareTwoTone } from 'antd'
import { VideoCameraTwoTone } from '@ant-design/icons'

import TopMenu from './component/TopMenu'

import './index.css'

function TopIndex() {
  return (
    <>
      <div className="logo">
        <VideoCameraTwoTone twoToneColor="#0BB6F1" />
        &nbsp;Bigstar
      </div>
      <TopMenu />
    </>
  )
}

export default TopIndex
