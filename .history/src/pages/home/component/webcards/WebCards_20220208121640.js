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
      <Card hoverable className="single-card" cover={<img alt="example" src={card1} />}>
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
      <Card hoverable className="single-card" cover={<img alt="example" src={card2} />}>
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
      <Card hoverable className="single-card" cover={<img alt="example" src={card3} />}>
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
      <Card hoverable className="single-card" cover={<img alt="example" src={card4} />}>
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
      <Card hoverable className="single-card" cover={<img alt="example" src={card5} />}>
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
      <Card hoverable className="single-card" cover={<img alt="example" src={card4} />}>
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
