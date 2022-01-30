import { Input } from 'antd'
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
    <div>
      <Search
        placeholder="input search text"
        // enterButton="Search"
        size="large"
        suffix={suffix}
        // onSearch={onSearch}
      />
    </div>
  )
}

export default TopSearch
