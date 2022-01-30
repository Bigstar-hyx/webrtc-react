import * as React from 'react'
import { Routes, Route } from 'react-router-dom'
import LiveIndex from './pages/live/Index'
import HomeIndex from './pages/home/Index'
import ViewerIndex from './pages/viewer/Index'
import { Layout } from 'antd'

const { Header, Footer, Sider, Content } = Layout

function App() {
  return (
    <>
      <Layout>
        <Header>Header</Header>
        <Content>
          <Routes>
            <Route path="/" element={<HomeIndex />} />
            <Route path="live" element={<LiveIndex />} />
            <Route path="viewer" element={<ViewerIndex />} />
          </Routes>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </>
  )
}

export default App
