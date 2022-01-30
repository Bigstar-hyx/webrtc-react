import { Input } from 'antd'

import './top-search.css'

const { Search } = Input
const onSearch = value => console.log(value)

function TopSearch() {
  return (
    <div>
      <Search placeholder="今天你想了解什么呢？(☆▽☆)" onSearch={onSearch} style={{ width: 200 }} />
    </div>
  )
}

export default TopSearch
