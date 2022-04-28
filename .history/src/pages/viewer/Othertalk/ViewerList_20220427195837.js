import { Comment, Tooltip, List } from 'antd'
import moment from 'moment'
import './index.css'

function ViewerList() {
  const data = [
    {
      author: 'Han Solo',
      avatar: 'https://joeschmoe.io/api/v1/random',
      datetime: (
        <Tooltip title={moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss')}>
          <span>{moment().subtract(1, 'days').fromNow()}</span>
          <p className="join-quit">退出房间</p>
        </Tooltip>
      )
    },
    {
      author: 'Han Solo',
      avatar: 'https://joeschmoe.io/api/v1/random',
      content: <p className="viewer-lists">加入房间</p>,
      datetime: (
        <Tooltip title={moment().subtract(2, 'days').format('YYYY-MM-DD HH:mm:ss')}>
          <span>{moment().subtract(2, 'days').fromNow()}</span>
        </Tooltip>
      )
    }
  ]

  return (
    <div>
      <List
        className="comment-list"
        header={`${data.length} replies`}
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

export default ViewerList
