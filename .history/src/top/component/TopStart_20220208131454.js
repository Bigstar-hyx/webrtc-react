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
        <li>
          <a href="/live">
            <Button type="primary" shape="round">
              <PlaySquareOutlined />
              我要开播
            </Button>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default TopStart
