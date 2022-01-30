import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

import './top-search.css'

function TopSearch() {
  return (
    <div>
      {/* <Input className="search" size="large" placeholder="今天你想了解什么呢？(☆▽☆)" suffix={<SearchOutlined />} /> */}
      <input type="text">
        <SearchOutlined />
      </input>
    </div>
  )
}

export default TopSearch
