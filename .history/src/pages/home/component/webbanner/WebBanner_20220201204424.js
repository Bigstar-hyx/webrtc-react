import React from 'react'
import 'antd/dist/antd.css'
import './web-banner.css'
import { Carousel, Radio } from 'antd'

const contentStyle = {
  height: '520px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79'
}

function WebBanner() {
  return (
    <div className="toutu">
      <Carousel className="datu" autoplay>
        <div>
          <h3>1</h3>
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
