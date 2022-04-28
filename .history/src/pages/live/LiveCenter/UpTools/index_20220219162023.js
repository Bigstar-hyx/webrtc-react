import './index.css'
import { Switch } from 'antd'

function onChange(checked) {
  console.log(`switch to ${checked}`)
}

function UpTools() {
  return (
    <div className="up-tools">
      <Switch defaultChecked onChange={onChange} />
    </div>
  )
}

export default UpTools
