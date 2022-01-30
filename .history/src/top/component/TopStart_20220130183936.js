import { Button } from 'antd'
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
      <Button type="primary">我要开播</Button>
    </div>
  )
}

export default TopStart
