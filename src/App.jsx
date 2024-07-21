import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import './components/mediaqueries.css';
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <>
    
    <Router>
    <ScrollToTop />
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
    </Router> 
    </>
  );
}

export default App;
