import { Comment, List, Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import moment from 'moment'

const data = [
  {
    author: '大星的小娇妻',
    avatar: <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />,
    content: (
      <p>
        We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people
        create their product prototypes beautifully and efficiently.
      </p>
    )
  },
  {
    author: '守护最好的大星',
    avatar: <Avatar style={{ backgroundColor: '#855de4' }} icon={<UserOutlined />} />,
    content: (
      <p>
        We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people
        create their product prototypes beautifully and efficiently.
      </p>
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
