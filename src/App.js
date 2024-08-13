import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CardGrid from './components/CardGrid';
import CourseDetail from './components/CourseDetail';
import Header from './components/Header';
import Slider from './components/Slider';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
         <Route path="/" element={<Slider />} />
          <Route path="/cardgrid" element={<CardGrid />} />
          <Route path="/course/:id" element={<CourseDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
