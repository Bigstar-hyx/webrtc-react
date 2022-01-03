import React from 'react'
import { Comment, Tooltip, List } from 'antd'
import moment from 'moment'

const data = [
  {
    author: '学员1',
    avatar: 'https://joeschmoe.io/api/v1/random',
    content: <p>老师真好看</p>
  },
  {
    author: '学员2',
    avatar: 'https://joeschmoe.io/api/v1/random',
    content: <p>讲得真好！</p>
  }
]

function TalkList() {
  return (
    <div>
      <List
        className="comment-list"
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <li>
            <Comment actions={item.actions} author={item.author} avatar={item.avatar} content={item.content} datetime={item.datetime} />
          </li>
        )}
      />
    </div>
  )
}

export default TalkList
