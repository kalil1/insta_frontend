import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Post from './Post';
import Story from './Story';
import Sidebar from './Sidebar';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [recommended, setRecommended] = useState([]);
  const [stories, setStories] = useState([
    { imageSrc: '/story-def.jpg', text: 'Story 1' },
    { imageSrc: '/story-def.jpg', text: 'Story 2' },
    { imageSrc: '/story-def.jpg', text: 'Story 3' },
    { imageSrc: '/story-def.jpg', text: 'Story 4' },
    { imageSrc: '/story-def.jpg', text: 'Story 5' },
    { imageSrc: '/story-def.jpg', text: 'Story 6' },
    { imageSrc: '/story-def.jpg', text: 'Story 7' },
  ]);

  // Fetch posts
  const getPosts = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/posts`);
      if (response.data) {
        if (Array.isArray(response.data)) {
          setPosts(response.data);
        } else if (Array.isArray(response.data.posts)) {
          setPosts(response.data.posts);
        } else {
          setPosts([]);
        }
      }
    } catch (error) {
      console.error('Failed to fetch posts:', error);
      setPosts([]);
    }
  };

  // Fetch recommended users
  const getRecommendedUsers = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/users/recommended`);
      if (response.data && Array.isArray(response.data)) {
        // Map to ensure each user has a profile object
        const usersWithProfiles = response.data.map(user => ({
          ...user,
          profile: user.profile || {},
        }));
        setRecommended(usersWithProfiles);
      } else {
        setRecommended([]);
      }
    } catch (error) {
      console.error('Failed to fetch recommended users:', error);
      setRecommended([]);
    }
  };

  useEffect(() => {
    getPosts();
    getRecommendedUsers();
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
          <div className="posts-container flex-container">
            {posts.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>

      {/* Sidebar section */}
      <Sidebar users={recommended} />
    </section>
  );
};

export default Home;
