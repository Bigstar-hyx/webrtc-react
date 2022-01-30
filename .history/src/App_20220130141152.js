import * as React from 'react'
import { Routes, Route } from 'react-router-dom'
import LiveIndex from './pages/live/Index'
import HomeIndex from './pages/home/Index'
import ViewerIndex from './pages/viewer/Index'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeIndex />} />
      <Route path="live" element={<LiveIndex />} />
      <Route path="viewer" element={<ViewerIndex />} />
    </Routes>
  )
}

export default App
