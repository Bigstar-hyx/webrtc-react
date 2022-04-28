import { WarningOutlined } from '@ant-design/icons'
import './index.css'

function UpLive() {
  return (
    <div className="up-live">
      <div className="up-title">
        <div className="up-head"></div>
        <div className="up-headline-l">
          <ul>
            <li>
              <button className="up-headline-bun">直播</button>
            </li>
            <li>欢迎来到 BBBigstar 的直播间 ~~~</li>
          </ul>
        </div>
        <div className="up-headline-r">
          <ul>
            <li>
              <a href="">1000人</a>
            </li>
            <li>
              <a href="">分享</a>
            </li>
            <li>
              <a href="">
                <WarningOutlined />
                举报
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="up-video">
        <video src=""></video>
      </div>
    </div>
  )
}

export default UpLive
