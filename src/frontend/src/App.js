import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import { TeamPage } from './pages/TeamPage';
import { MatchPage } from './pages/MatchPage';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <div className="App">
      
        <Routes>
          <Route path="/teams/:teamName/matches/:year" element={<MatchPage />} />
          <Route path="/teams/:teamName" element={<TeamPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      
    </div>
  );
}

export default App;
