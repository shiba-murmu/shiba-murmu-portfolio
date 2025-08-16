import React from 'react'
import Container from './container/Container'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact'
function App() {
  return (
    <>
        <Router>
            <Routes>
                <Route path='/contact' element={<Contact />} />
                <Route path="/" element={<Container />} />
            </Routes>
        </Router>
    </>
  )
}

export default App