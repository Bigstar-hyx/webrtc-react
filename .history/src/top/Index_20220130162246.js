// import { PlaySquareTwoTone } from 'antd'
import { PlaySquareOutlined } from '@ant-design/icons'

import TopMenu from './component/TopMenu'

import './index.css'

function TopIndex() {
  return (
    <>
      <div className="logo">
        <PlaySquareOutlined OutlinedColor="#0BB6F1" />
        &nbsp;Bigstar
      </div>
      <TopMenu />
    </>
  )
}

export default TopIndex
