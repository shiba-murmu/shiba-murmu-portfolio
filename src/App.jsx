import React from 'react'
import Container from './container/Container'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact'
import Admin from './pages/admin/Admin'
import { ToastContainer } from 'react-toastify'
function App() {
  return (
    <>
        <Router>
            <ToastContainer />
            <Routes>
                <Route path='/contact' element={<Contact />} />
                <Route path='/admin' element={<Admin />} />
                <Route path="/" element={<Container />} />
            </Routes>
        </Router>
    </>
  )
}

export default App