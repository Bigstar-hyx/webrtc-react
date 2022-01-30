import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

import './top-search.css'

const suffix = (
  <SearchOutlined
    style={{
      fontSize: 16,
      color: '#646c7a'
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
