import logo from './logo.svg';
import Home from './components/Home';
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
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
