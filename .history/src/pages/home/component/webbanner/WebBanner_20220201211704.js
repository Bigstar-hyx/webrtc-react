import React from 'react'
import 'antd/dist/antd.css'
import './web-banner.css'
import { Carousel, Radio } from 'antd'

function WebBanner() {
  return (
    <div className="toutu">
      <Carousel className="datu" autoplay>
        <div>
          <img src="http://irbq.top/2/1HL4y1J7ng.jpg" alt="1" />
        </div>
        <div>
          <img src="http://irbq.top/2/1fR4y1T7aV.jpg" alt="2" />
        </div>
        <div>
          <img src="http://irbq.top/2/1hL4y1x74m.jpg" alt="3" />
        </div>
        <div>
          <img
            src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2020-05-11%2F5eb8cb5504d47.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1646312312&t=b0eb0efdb38f6a30485d41c2a714da2b"
            alt="4"
          />
        </div>
      </Carousel>
    </div>
  )
}

export default WebBanner
