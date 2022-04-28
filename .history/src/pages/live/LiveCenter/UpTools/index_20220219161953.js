import './index.css'
import { Switch } from 'antd'

function UpTools() {
  return (
    <div className="up-tools">
      <Switch defaultChecked onChange={onChange} />
    </div>
  )
}

export default UpTools
