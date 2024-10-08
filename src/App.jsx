import React from "react"
import { BrowserRouter as Routes, Router, Route } from "react-router-dom"
import { HomePage } from './pages/HomePage'

function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path={<HomePage/>} />
          <Route path={<HomePage/>} />
          <Route path={<HomePage/>} />
          <Route path={<HomePage/>} />
          <Route path={<HomePage/>} />
          <Route path={<HomePage/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
