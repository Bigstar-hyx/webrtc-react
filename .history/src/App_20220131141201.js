import * as React from 'react'
import { Routes, Route } from 'react-router-dom'

import LiveIndex from './pages/live/Index'
import HomeIndex from './pages/home/Index'
import ViewerIndex from './pages/viewer/Index'
import TopIndex from './top/Index'
import './app.css'

import { Layout } from 'antd'

const { Header, Footer, Content } = Layout

function App() {
  return (
    <>
      <Layout>
        <Header>
          <TopIndex />
        </Header>
        <Content>
          <Routes>
            <Route path="/" element={<HomeIndex />} />
            <Route path="live" element={<LiveIndex />} />
            <Route path="viewer" element={<ViewerIndex />} />
          </Routes>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Live System ©2022 Created by Bigstar</Footer>
      </Layout>
    </>
  )
}

export default App
