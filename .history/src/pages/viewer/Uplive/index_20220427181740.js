import { WarningOutlined, EyeOutlined, ShareAltOutlined } from '@ant-design/icons'
import './index.css'

function UpLive() {
  return (
    <div className="up-live">
      <div className="up-title">
        <div className="up-head"></div>
        <div className="up-headline">
          <ul className="up-headline-l">
            <li>
              <button className="up-headline-bun">直播</button>
            </li>
            <li>欢迎来到 BBBigstar 的直播间 ~~~</li>
          </ul>

          <ul className="up-headline-r">
            <li>
              <a href="">
                <EyeOutlined />
                &nbsp;1000人
              </a>
            </li>
            <li>
              <a href="">
                <ShareAltOutlined />
                &nbsp;分享
              </a>
            </li>
            <li>
              <a href="">
                <WarningOutlined />
                &nbsp;举报
              </a>
            </li>
          </ul>
        </div>
        <div className="up-headline-d">
          <ul>
            <li>1</li>
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
