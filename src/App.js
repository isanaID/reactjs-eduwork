//import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from './component/Home';
import './sass/style.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Register';
import News from './news';
import Newsv2 from './newsv2';
import Redux from './redux';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/news" element={<News />} />
        <Route path="/newsv2" element={<Newsv2 />} />
        <Route path="/redux" element={<Redux />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
