import React from 'react'
import 'antd/dist/antd.css'
import './web-banner.css'
import { Carousel, Radio } from 'antd'

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79'
}

function WebBanner() {
  const [dotPosition, setDotPosition] = React.useState('top')

  const handlePositionChange = ({ target: { value } }) => {
    setDotPosition(value)
  }
  return (
    <div className="toutu">
      <Radio.Group onChange={handlePositionChange} value={dotPosition} style={{ marginBottom: 8 }}>
        <Radio.Button value="top">Top</Radio.Button>
        <Radio.Button value="bottom">Bottom</Radio.Button>
        <Radio.Button value="left">Left</Radio.Button>
        <Radio.Button value="right">Right</Radio.Button>
      </Radio.Group>
      <Carousel dotPosition={dotPosition}>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </div>
  )
}

export default WebBanner
