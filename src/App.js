import logo from './logo.svg';
import React, { Component }  from 'react';
import Home from './components/Home';
import Post from './components/Post';
import Profile_info from './components/Profile_info';
import Stories from './components/Stories';
import Profile from './components/Profile';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from "react-router-dom";

function App() {


  return (
    <BrowserRouter>
      <div className="App">
        <div className="content" >
          <Routes>
            <Route exact path="/post" element={<Post />} />
            <Route exact path="/stories" element={<Stories />} />
            <Route exact path="/form" element={<Profile_info />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
