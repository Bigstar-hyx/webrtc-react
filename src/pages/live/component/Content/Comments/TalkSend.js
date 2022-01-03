import React from 'react'
import { Input, Button } from 'antd'

function TalkSend() {
  return (
    <div className="site-input-group-wrapper">
      <Input.Group compact>
        <Input style={{ width: 'calc(100% - 70px)' }} />
        <Button type="primary">发送</Button>
      </Input.Group>
    </div>
  )
}

export default TalkSend
