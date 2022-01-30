import { Input } from 'antd'
import { AudioOutlined } from '@ant-design/icons'

import './top-search.css'

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff'
    }}
  />
)

function TopSearch() {
  return (
    <div>
      <Input size="large" placeholder="large size" prefix={<UserOutlined />} />
    </div>
  )
}

export default TopSearch
