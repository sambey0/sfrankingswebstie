import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';
import DepartmentRankingPage from './DepartmentRankingPage';
import AboutPage from './AboutPage';
import AnalysisPage from './AnalysisPage';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav className="navbar">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/department-ranking">Department-wise Ranking</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/analysis">Analysis</Link></li>
            </ul>
          </nav>
        </header>

        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/department-ranking" element={<DepartmentRankingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/analysis" element={<AnalysisPage />} />
          </Routes>
        </div>

        <footer>
          <p>CSE519 Project</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;



