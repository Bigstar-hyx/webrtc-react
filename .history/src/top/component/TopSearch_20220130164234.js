import { Input, Space } from 'antd'

import './top-search.css'

const { Search } = Input
const onSearch = value => console.log(value)

function TopSearch() {
  return (
    <div>
      <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
    </div>
  )
}

export default TopSearch
