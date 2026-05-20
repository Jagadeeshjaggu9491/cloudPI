import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './sections/Navbar';
import Home from './pages/Home';
import Footer from './sections/Footer';

export default function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Fallback routing */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      {/* <Footer /> */}
    </Router>
  );
}
