import { useState } from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Navbar from './components/pages/Navbar';
import HeroSection from './components/pages/HeroSection';


function App() {

  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Navbar />} />
            <Route path="/hero" element={<HeroSection />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
