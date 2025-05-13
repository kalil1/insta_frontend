import React from 'react';
import Home from './components/Home';
import Post from './components/Post';
import Profile_info from './components/Profile_info';
import Stories from './components/Stories';
import Profile from './components/Profile';
import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="content">
        <Routes>
          <Route path="/post" element={<Post />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/form" element={<Profile_info />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
