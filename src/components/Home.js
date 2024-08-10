// Home.js
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from '../redux/postSlice';
import Post from './Post';
import Story from './Story';
import Sidebar from './Sidebar'; // Import the Sidebar component

const Home = () => {
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);
  const [stories, setStories] = useState([
    { imageSrc: 'https://example.com/image1.jpg', text: 'Lorem.' },
    { imageSrc: 'https://example.com/image2.jpg', text: 'Lorem.' },
    // Add more stories as needed
  ]);

  useEffect(() => {
    dispatch(getPosts()).then(response => {
      setPosts(response.payload);
    });  
  }, []);

  return (
    <section className="main-content grid">
      <div className="main-gallery-wrapper flex-container">
        {/* Stories section */}
        <div className="pop-wrapper flex-container">
          {stories.map((story, index) => (
            <Story key={index} imageSrc={story.imageSrc} text={story.text} />
          ))}
        </div>
        
        {/* Posts section */}
        <div className="card-wrapper flex-container">
          <div className="whtsmk">
            {posts.map((post, index) => (
              <Post key={index} post={post} />
            ))}
          </div>
        </div>
      </div>

      {/* Sidebar section */}
      <Sidebar />
    </section>
  );
};

export default Home;
