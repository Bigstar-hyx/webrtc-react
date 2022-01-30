import { Menu } from 'antd'

import TopMenu from './component/TopMenu'

import './index.css'

function TopIndex() {
  return (
    <>
      <div className="logo">
        <PlaySquareTwoTone />
        Bigstar
      </div>
      <TopMenu />
    </>
  )
}

export default TopIndex
