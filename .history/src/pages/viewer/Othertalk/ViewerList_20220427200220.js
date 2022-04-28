import { Avatar, Image } from 'antd'
import './index.css'

function ViewerList() {
  return (
    <div>
      <Avatar src={<Image src="https://joeschmoe.io/api/v1/random" style={{ width: 32 }} />} />
    </div>
  )
}

export default ViewerList
