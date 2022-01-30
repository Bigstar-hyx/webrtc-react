import * as React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import LiveIndex from './pages/live/Index'
import HomeIndex from './pages/home/Index'

function App() {
  return (
    <Routes>
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="/" element={<HomeIndex />} />
      <Route path="live" element={<LiveIndex />} />
    </Routes>
  )
}

export default App
