import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Signup from './components/Signup';
import ProfileSetting from './components/ProfileSetting';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profilesetting" element={<ProfileSetting />} />
      </Routes>
    </Router>
  );
}

export default App;
