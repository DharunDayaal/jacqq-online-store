import React from "react"
import { BrowserRouter, Routes, Router, Route } from "react-router-dom"
// import { HomePage } from './pages/HomePage'
import Login from "./pages/Login"

function App() {
  

  return (
    <>
      {/* <Router>
        <Routes>
          <Route path={<HomePage/>} />
          <Route path={<HomePage/>} />
          <Route path={<HomePage/>} />
          <Route path={<HomePage/>} />
          <Route path={<HomePage/>} />
          <Route path={<HomePage/>} />
        </Routes>
      </Router> */}
      <Login />
    </>
  )
}

export default App
