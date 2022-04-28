import { Comment, Tooltip, List } from 'antd'
import moment from 'moment'

const data = [
  {
    author: '大星的小娇妻',
    avatar: 'https://joeschmoe.io/api/v1/random',
    content: (
      <p>
        We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people
        create their product prototypes beautifully and efficiently.
      </p>
    ),
    datetime: (
      <Tooltip title={moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss')}>
        <span>{moment().subtract(1, 'days').fromNow()}</span>
      </Tooltip>
    )
  },
  {
    author: '守护最好的大星',
    avatar: 'https://joeschmoe.io/api/v1/random',
    content: (
      <p>
        We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people
        create their product prototypes beautifully and efficiently.
      </p>
    ),
    datetime: (
      <Tooltip title={moment().subtract(2, 'days').format('YYYY-MM-DD HH:mm:ss')}>
        <span>{moment().subtract(2, 'days').fromNow()}</span>
      </Tooltip>
    )
  }
]

function Danmu() {
  return (
    <div>
      <List
        className="comment-list"
        // header={`${data.length} replies`}
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

export default Danmu
