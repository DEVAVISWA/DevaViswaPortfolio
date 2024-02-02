import React from 'react'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Home from './components/Home/Home'
import Project from './components/Project/Project'
import Contact from './components/Contact/Contact'
import '../src/App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <div>
        <Router basename={'/'}>
          <Navbar />          
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/project' element={<Project />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </Router>
      </div>
    </div>
  )
}

export default App