import React from 'react'
import 'antd/dist/antd.css'
import './web-banner.css'
import { Carousel, Radio } from 'antd'

import lunbo1 from '/public/lunbo/lunbo1.png'

function WebBanner() {
  return (
    <div className="toutu">
      <Carousel className="datu" autoplay>
        <div>
          <img src={lunbo1} alt="1" />
        </div>
        <div>
          <img src="http://irbq.top/2/1fR4y1T7aV.jpg" alt="2" />
        </div>
        <div>
          <img src="http://irbq.top/2/1hL4y1x74m.jpg" alt="3" />
        </div>
        <div>
          <img src="http://irbq.top/2/1iT4y1y7S3.jpg" alt="4" />
        </div>
      </Carousel>
    </div>
  )
}

export default WebBanner
