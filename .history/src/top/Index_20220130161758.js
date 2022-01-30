// import { PlaySquareTwoTone } from 'antd'
import { VideoCameraTwoTone } from '@ant-design/icons'

import TopMenu from './component/TopMenu'

import './index.css'

function TopIndex() {
  return (
    <>
      <div className="logo">
        {/* <PlaySquareTwoTone /> */}
        <VideoCameraTwoTone />
        &nbsp;Bigstar
      </div>
      <TopMenu />
    </>
  )
}

export default TopIndex
