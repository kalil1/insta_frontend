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
  // const [users, setUsers] = useState([]); // State to hold user data
  const [recommended, setRecommended] = useState([]); // State to hold recommended user data
  const [stories, setStories] = useState([
    { imageSrc: 'https://example.com/image1.jpg', text: 'Lorem.' },
    { imageSrc: 'https://example.com/image2.jpg', text: 'Lorem.' },
    // Add more stories as needed
  ]);

  useEffect(() => {
    dispatch(getPosts()).then(response => {
      setPosts(response.payload);
    });

    // Fetch all users and set them to state
    // dispatch(getUsers()).then(response => {
    //   setUsers(response.payload);
    // });

    // Fetch recommended users and set them to state
    dispatch(recommendedUsers()).then(response => {
      setRecommended(response.payload);
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
          <div className="whtsmk">
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
