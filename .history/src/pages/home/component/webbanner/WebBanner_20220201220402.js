import React from 'react'
import 'antd/dist/antd.css'
import './web-banner.css'
import { Carousel, Radio } from 'antd'

import lunbo1 from './img/lunbo1.jpeg'
import lunbo2 from './img/lunbo2.webp'
import lunbo2 from './img/lunbo3.webp'
import lunbo2 from './img/lunbo4.webp'

function WebBanner() {
  return (
    <div className="toutu">
      <Carousel className="datu" autoplay>
        <div>
          <img src={lunbo1} alt="1" />
        </div>
        <div>
          <img src={lunbo2} alt="2" />
        </div>
        <div>
          <img src={lunbo3} alt="3" />
        </div>
        <div>
          <img src={lunbo4} alt="4" />
        </div>
      </Carousel>
    </div>
  )
}

export default WebBanner
