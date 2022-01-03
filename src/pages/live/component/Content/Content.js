import React from 'react'
import { Row, Col } from 'antd'
import Video from './Video/Video'
import Comments from './Comments/Comments'
import 'antd/dist/antd.css'
import './Content.css'

function Content() {
  return (
    <div className="content">
      <Row gutter={8}>
        <Col span={18}>
          <Video></Video>
        </Col>
        <Col span={6}>
          <Comments></Comments>
        </Col>
      </Row>
    </div>
  )
}

export default Content
