import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

import './top-search.css'

const suffix = (
  
)

function TopSearch() {
  return (
    <div>
      <Input
        className="search"
        // size="large"
        placeholder="今天你想了解什么呢？(☆▽☆)"
        suffix='<SearchOutlined/>'
      />
    </div>
  )
}

export default TopSearch
