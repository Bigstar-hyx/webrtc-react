import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

import './top-search.css'

const suffix = (
  <SearchOutlined
    style={{
      fontSize: 16,
      color: '#1890ff'
    }}
  />
)

function TopSearch() {
  return (
    <div>
      <Input size="large" placeholder="large size" suffix={suffix} />
    </div>
  )
}

export default TopSearch
