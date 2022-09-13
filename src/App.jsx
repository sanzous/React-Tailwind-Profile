import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className="bg-slate-600">
      <Navbar />
      <Home />
    </div>
  )
}

export default App