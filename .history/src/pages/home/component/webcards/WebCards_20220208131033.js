import './web-cards.css'
import { Card } from 'antd'
import card1 from './img/card1.webp'
import card2 from './img/card2.webp'
import card3 from './img/card3.webp'
import card4 from './img/card4.webp'
import card5 from './img/card5.webp'

const { Meta } = Card

function WebCards() {
  return (
    <div className="cards">
      <h1>推荐直播</h1>
      <Card hoverable className="single-card" cover={<img alt="example" src={card1} />}>
        <Meta title="欠B站好多币！55" description="Queen晴" />
      </Card>
      <Card hoverable className="single-card" cover={<img alt="example" src={card2} />}>
        <Meta title="恋爱天花板" description="妮宝儿U" />
      </Card>
      <Card hoverable className="single-card" cover={<img alt="example" src={card3} />}>
        <Meta title="【死亡细胞】谁说手指烫伤的不算英雄" description="龙胆千锤百炼" />
      </Card>
      <Card hoverable className="single-card" cover={<img alt="example" src={card4} />}>
        <Meta title="3D双设备 甜音清流 还能磕头" description="梦梦Sweet" />
      </Card>
      <Card hoverable className="single-card" cover={<img alt="example" src={card5} />}>
        <Meta title="上五五贼船啦～" description="把五五往怀里" />
      </Card>
      <Card hoverable className="single-card" cover={<img alt="example" src={card5} />}>
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
      <Card hoverable className="single-card" cover={<img alt="example" src={card4} />}>
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
      <Card hoverable className="single-card" cover={<img alt="example" src={card3} />}>
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
      <Card hoverable className="single-card" cover={<img alt="example" src={card2} />}>
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
      <Card hoverable className="single-card" cover={<img alt="example" src={card1} />}>
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
    </div>
  )
}

export default WebCards
