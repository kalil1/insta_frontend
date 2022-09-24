import Post from "./Post";
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../redux/postSlice';
import Stories from "./Stories";
import Profile_icon from "./Profile_icon";

const Home = () => {
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([])

  useEffect(() => {
    dispatch(getPosts()).then(response => {
      setPosts(response.payload)
    });  
  }, []);


  return (
    
<section className="main-content grid">
  <div className="main-gallery-wrapper flex-container">
    <div className="pop-wrapper flex-container">
      <span className="pop flex-container">
        <div className="pop-img-container">
        <img src="https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" className="pop-img"/>
          </div>
        <p className="pop-text">Lorem.</p>
      </span>
      
      <span className="pop flex-container">
        <div className="pop-img-container">
        <img src="https://images.unsplash.com/photo-1657214059189-6bace4ad1ab8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" alt="" className="pop-img"/>
          </div>
        <p className="pop-text">Lorem.</p>
      </span>
      <span className="pop flex-container">
        <div className="pop-img-container">
        <img src="https://images.unsplash.com/photo-1548366565-6bbab241282d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" className="pop-img"/>
          </div>
        <p className="pop-text">Lorem.</p>
      </span>
      <span className="pop flex-container">
        <div className="pop-img-container">
        <img src="https://images.unsplash.com/photo-1521146764736-56c929d59c83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" className="pop-img"/>
          </div>
        <p className="pop-text">Lorem.</p>
      </span>
      <span className="pop flex-container">
        <div className="pop-img-container">
        <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" className="pop-img"/>
          </div>
        <p className="pop-text">Lorem.</p>
      </span>  
      <span className="pop flex-container">
        <div className="pop-img-container">
        <img src="https://images.unsplash.com/photo-1657003963857-ec800f2cce43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=702&q=80" alt="" className="pop-img"/>
          </div>
        <p className="pop-text">Lorem.</p>
      </span> 
      
    </div>
    
      <div className="card-wrapper flex-container">
        <div className="whtsmk">
          {posts.map((x) => (
            <Post post={x}/>
          ))}
        </div>
    </div>
  </div>

<div className="sidebar">
  <div className="sidebar-menu-container">
    <div className="sidebar-card sidebar-header grid">
      <img  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" className="sidebar-img sidebar-hd-img"/>
      <span className="sidebar-title card-title">
        Lorem, ipsum.
      </span>
      <span className="card-subtitle sidebar-subtitle">Lorem.</span>
      <span className="sidebar-btn">
        Change
      </span>
    </div>
    <div className="suggestions-header grid">
      <span className="suggestions-text">
        Suggestions for you
      </span>
      <span className="sidebar-btn-alt">
        See all
      </span>
    </div>
     <div className="sidebar-card sidebar-card-alt grid">
      <img  src="https://images.unsplash.com/photo-1657000529335-5c1bf76204af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" className="sidebar-img side-bar-img-alt"/>
      <span className="sidebar-title card-title">
        Lorem, ipsum.
      </span>
      <span className="card-subtitle sidebar-subtitle sidebar-subtitle-alt">Lorem.</span>
      <span className="sidebar-btn">
        Follow
      </span>
    </div>
    <div className="sidebar-card sidebar-card-alt grid">
      <img  src="https://images.unsplash.com/photo-1656143269388-e65183fac19f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" className="sidebar-img side-bar-img-alt"/>
      <span className="sidebar-title card-title">
        Lorem, ipsum.
      </span>
      <span className="card-subtitle sidebar-subtitle sidebar-subtitle-alt">Lorem.</span>
      <span className="sidebar-btn">
        Follow
      </span>
    </div>
    <div className="sidebar-card sidebar-card-alt grid">
      <img  src="https://images.unsplash.com/photo-1656863949585-2bd7f7d0f3d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" className="sidebar-img side-bar-img-alt"/>
      <span className="sidebar-title card-title">
        Lorem, ipsum.
      </span>
      <span className="card-subtitle sidebar-subtitle sidebar-subtitle-alt">Lorem.</span>
      <span className="sidebar-btn">
        Follow
      </span>
    </div>
    <div className="sidebar-card sidebar-card-alt grid">
      <img  src="https://images.unsplash.com/photo-1656858772675-49e73a27d22b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" className="sidebar-img side-bar-img-alt"/>
      <span className="sidebar-title card-title">
        Lorem, ipsum.
      </span>
      <span className="card-subtitle sidebar-subtitle sidebar-subtitle-alt">Lorem.</span>
      <span className="sidebar-btn">
        Follow
      </span>
    </div>
    
    
  
  </div>
</div>  
</section>
  );
};

export default Home;
