import './index.css'

var audioSource = document.querySelector('select#audioSource')
var audioOutput = document.querySelector('select#audioOutput')
var videoSource = document.querySelector('select#videoSource')

if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
  console.log('enumerateDevices is not supported')
} else {
  navigator.mediaDevices.enumerateDevices().then(gotDevices).catch(handleError)
}
function gotDevices(deviceInfos) {
  deviceInfos.forEach(function (deviceInfo) {
    console.log(deviceInfo.kind + ': label = ' + deviceInfo.label + ':id = ' + deviceInfo.deviceId + ': groupId = ' + deviceInfo.groupId)
    var option = document.createElement('option')
    option.text = deviceInfo.label
    option.value = deviceInfo.deviceId
    if (deviceInfo.kind === 'audioSource') {
      audioSource.appendChild(option)
    } else if (deviceInfo.kind === 'audioOutput') {
      audioOutput.appendChild(option)
    } else if (deviceInfo.kind === 'videoSource') {
      videoSource.appendChild(option)
    }
  })
}

function handleError(err) {
  console.log(err.name + ' : ' + err.message)
}

function LiveLeft() {
  return (
    <div className="live-left">
      <div>
        <label>麦克风</label>
        <select id="audioSource"></select>
      </div>
      <div>
        <label>扬声器</label>
        <select id="audioOutput"></select>
      </div>
      <div>
        <label>视频</label>
        <select id="videoSource"></select>
      </div>
    </div>
  )
}

export default LiveLeft
