import React from 'react'
import { List, Avatar } from 'antd'

const data = [
  {
    title: '学员1'
  },
  {
    title: '学员2'
  },
  {
    title: '学员3'
  },
  {
    title: '学员4'
  }
]

function SList() {
  return (
    <div>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title={<a href="https://ant.design">{item.title}</a>}
              description="学员描述"
            />
          </List.Item>
        )}
      />
    </div>
  )
}

export default SList
