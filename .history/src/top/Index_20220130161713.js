// import { PlaySquareTwoTone } from 'antd'
import { PlaySquareTwoTone } from '@ant-design/icons'

import TopMenu from './component/TopMenu'

import './index.css'

function TopIndex() {
  return (
    <>
      <div className="logo">
        <PlaySquareTwoTone />
        &nbsp;Bigstar
      </div>
      <TopMenu />
    </>
  )
}

export default TopIndex
