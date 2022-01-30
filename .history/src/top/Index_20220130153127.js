import { Menu } from 'antd'

import './index.css'

function TopIndex() {
  return (
    <div className="logo">
      <div>logo</div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        {new Array(15).fill(null).map((_, index) => {
          const key = index + 1
          return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>
        })}
      </Menu>
    </div>
  )
}

export default TopIndex
