import './Index.css'
import HeaderLive from './component/Header/Header'
import Content from './component/Content/Content'
import Footer from './component/Footer/Footer'

function Index() {
  return (
    <div className="home">
      <HeaderLive />
      <Content />
      <Footer />
    </div>
  )
}

export default Index
