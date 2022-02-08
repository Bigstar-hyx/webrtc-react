import './web-cards.css'
import { Card } from 'antd'
import { card1, card2 } from './img/'

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
      <Card
        hoverable
        className="single-card"
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
      <Card
        hoverable
        className="single-card"
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
      <Card
        hoverable
        className="single-card"
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
      <Card
        hoverable
        className="single-card"
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
      <Card
        hoverable
        className="single-card"
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
      <Card
        hoverable
        className="single-card"
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
      <Card
        hoverable
        className="single-card"
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
      <Card
        hoverable
        className="single-card"
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
    </div>
  )
}

export default WebCards
