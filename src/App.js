import React from 'react';
import Home from './components/Home';
// import Post from './components/Post';
import Posts from './components/Posts';
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
          <Route path="/posts" element={<Posts />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/form/:id" element={<Profile_info />} />
          {/* <Route path="/new_post" element={<NewPost />} /> */}
          {/* <Route path="/profile" element={<Profile />} /> */}
          <Route path="/profiles/:id" element={<Profile />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
