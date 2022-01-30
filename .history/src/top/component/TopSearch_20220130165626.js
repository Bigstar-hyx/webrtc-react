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
    <div className="search">
      <Input
        // size="large"
        placeholder="今天你想了解什么呢？(☆▽☆)"
        suffix={suffix}
      />
    </div>
  )
}

export default TopSearch
