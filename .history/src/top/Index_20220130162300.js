// import { PlaySquareTwoTone } from 'antd'
import { PlaySquareTwoTone } from '@ant-design/icons'

import TopMenu from './component/TopMenu'

import './index.css'

function TopIndex() {
  return (
    <>
      <div className="logo">
        <PlaySquareTwoTone OutlinedColor="#0BB6F1" />
        &nbsp;Bigstar
      </div>
      <TopMenu />
    </>
  )
}

export default TopIndex
