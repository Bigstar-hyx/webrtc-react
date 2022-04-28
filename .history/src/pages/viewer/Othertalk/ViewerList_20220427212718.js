import './viewer-list.css'
import tx1 from '../img/tx1.webp'
import tx2 from '../img/tx2.webp'
import tx5 from '../img/tx5.webp'

function ViewerList() {
  return (
    <div className="viewer-list">
      <ul>
        <li>
          <div className="div-left">
            <img src={tx1} alt="tx1" />
            <span>&nbsp;&nbsp;大星的小娇妻</span>
          </div>
          <span className="span-right">加入房间</span>
        </li>
        <li>
          <div className="div-left">
            <img src={tx2} alt="tx2" />
            <span>&nbsp;&nbsp;守护最好的大星</span>
          </div>
          <span className="span-right">加入房间</span>
        </li>
        <li>
          <div className="div-left">
            <img src={tx5} alt="tx5" />
            <span>&nbsp;&nbsp;一个未知名的守护者</span>
          </div>
          <span className="span-right">退出房间</span>
        </li>
      </ul>
    </div>
  )
}

export default ViewerList
