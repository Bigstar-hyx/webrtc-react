// import { PlaySquareTwoTone } from 'antd'
import { PlaySquareTwoTone } from '@ant-design/icons'

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
    </>
  )
}

export default TopIndex
