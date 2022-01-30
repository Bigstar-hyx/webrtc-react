import { Button } from 'antd'
import { PlaySquareOutlined } from '@ant-design/icons'
import './top-start.css'

function TopStart() {
  return (
    <div>
      <ul>
        <li>
          <a href="">动态</a>
        </li>
        <li>
          <a href="">签到</a>
        </li>
      </ul>
      <Button type="primary" shape="circle">
        <PlaySquareOutlined />
        我要开播
      </Button>
    </div>
  )
}

export default TopStart
