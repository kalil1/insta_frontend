import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from '../redux/postSlice';
import { recommendedUsers } from '../redux/userSlice'; // Import the getUsers and recommendedUsers services
import Post from './Post';
import Story from './Story';
import Sidebar from './Sidebar';

const Home = () => {
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);
  const [recommended, setRecommended] = useState([]); // State to hold recommended user data
  // const [users, setUsers] = useState([]); // State to hold user data
  const [stories, setStories] = useState([
    { imageSrc: '/story-def.jpg', text: 'Story 1' },
    { imageSrc: '/story-def.jpg', text: 'Story 2' },
    { imageSrc: '/story-def.jpg', text: 'Story 3' },
    { imageSrc: '/story-def.jpg', text: 'Story 4' },
    { imageSrc: '/story-def.jpg', text: 'Story 5' },
    { imageSrc: '/story-def.jpg', text: 'Story 6' },
    { imageSrc: '/story-def.jpg', text: 'Story 7' },
        // Add more stories as needed
  ]);

  useEffect(() => {
    dispatch(getPosts()).then(response => {
      // console.log('Post payload:', response.payload);
  
      if (Array.isArray(response.payload)) {
        setPosts(response.payload); 
      } else if (response.payload && Array.isArray(response.payload.posts)) {
        setPosts(response.payload.posts); 
      } else {
        console.warn('Posts payload malformed:', response.payload);
        setPosts([]);
      }
    });
    // Fetch all users and set them to state
    // dispatch(getUsers()).then(response => {
    //   setUsers(response.payload);
    // });

    // Fetch recommended users and set them to state
    dispatch(recommendedUsers()).then(response => {
      if (response.payload && Array.isArray(response.payload)) {
        setRecommended(response.payload);
      } else {
        setRecommended([]);
      }
    });
  }, [dispatch]);

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
          <div className="posts-container flex-container">
            {posts.map((post, index) => (
              <Post key={index} post={post} />
            ))}
          </div>
        </div>
      </div>

      {/* Sidebar section */}
      <Sidebar users={recommended} /> {/* Pass recommended users to Sidebar */}
    </section>
  );
};

export default Home;
