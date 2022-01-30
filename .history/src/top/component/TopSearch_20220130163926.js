import { Input, Space } from 'antd'
import { AudioOutlined } from '@ant-design/icons'

import './top-search.css'

const { Search } = Input
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff'
    }}
  />
)
const onSearch = value => console.log(value)

function TopSearch() {
  return (
    <Space direction="vertical">
      <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
    </Space>
  )
}

export default TopSearch
