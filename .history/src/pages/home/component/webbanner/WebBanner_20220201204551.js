import React from 'react'
import 'antd/dist/antd.css'
import './web-banner.css'
import { Carousel, Radio } from 'antd'

function WebBanner() {
  return (
    <div className="toutu">
      <Carousel className="datu" autoplay>
        <div>
          <img src="https://img2.baidu.com/it/u=3559135495,311467801&fm=253&fmt=auto&app=138&f=JPEG" alt="" />
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
      </Carousel>
    </div>
  )
}

export default WebBanner
