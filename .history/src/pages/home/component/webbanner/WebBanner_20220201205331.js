import React from 'react'
import 'antd/dist/antd.css'
import './web-banner.css'
import { Carousel, Radio } from 'antd'

function WebBanner() {
  return (
    <div className="toutu">
      <Carousel className="datu" autoplay>
        <div>
          <img src="https://img2.baidu.com/it/u=1825544668,1194563496&fm=253&fmt=auto" alt="1" />
        </div>
        <div>
          <img src="https://img2.baidu.com/it/u=3559135495,311467801&fm=253&fmt=auto" alt="2" />
        </div>
        <div>
          <img src="https://img2.baidu.com/it/u=3559135495,311467801&fm=253&fmt=auto" alt="3" />
        </div>
        <div>
          <img src="https://img2.baidu.com/it/u=3559135495,311467801&fm=253&fmt=auto" alt="4" />
        </div>
      </Carousel>
    </div>
  )
}

export default WebBanner
