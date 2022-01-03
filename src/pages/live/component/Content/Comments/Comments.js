import React, { useState } from 'react'
import { Card } from 'antd'
import './comments.css'
import Talk from './Talk'
import SList from './SList'

const tabListNoTitle = [
  {
    key: 'talk',
    tab: '讨论区'
  },
  {
    key: 'slist',
    tab: '学员列表'
  }
]

const contentListNoTitle = {
  talk: <Talk />,
  slist: <SList />
}

function Comments() {
  const [activeTabKey2, setActiveTabKey2] = useState('talk')

  const onTab2Change = key => {
    setActiveTabKey2(key)
  }
  return (
    <div className="comments-box">
      <Card
        className="card"
        tabList={tabListNoTitle}
        activeTabKey={activeTabKey2}
        onTabChange={key => {
          onTab2Change(key)
        }}
      >
        {contentListNoTitle[activeTabKey2]}
      </Card>
    </div>
  )
}

export default Comments
