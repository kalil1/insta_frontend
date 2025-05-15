import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      const response = await axios.get(process.env.REACT_APP_API_URL + '/posts');
      setPosts(response.data);
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    }
  };

  return (
    <div className="masonry-layout">
      {posts.map((post) => {
        const profileName = post.profile && post.profile.name ? post.profile.name : 'Unknown User';
        const fallbackImage = "/fallbacks/fallback" + (Math.floor(Math.random() * 10) + 1) + ".jpg";
        const likeCount = post.likes && post.likes.length ? post.likes.length : 0;
        const commentCount = post.comments && post.comments.length ? post.comments.length : 0;

        return (
          <div className="masonry-item position-relative" key={post.id}>
            <img
              src={post.image_url || fallbackImage}
              alt={post.caption}
              className="img-fluid w-100 mb-2 rounded"
              style={{ objectFit: 'cover' }}
            />
            <div className="post-overlay">
              <div className="d-flex justify-content-between align-items-center mb-1">
                <strong>{profileName}</strong>
                <small className="text-muted ms-2">
                  ❤️ {likeCount} · 💬 {commentCount}
                </small>
              </div>
              <ul className="comments-list">
                {post.comments && post.comments.map((comment, idx) => {
                  const commenter = comment.commenter_name || 'Anon';
                  return (
                    <li key={idx}>
                      <strong>{commenter}:</strong> {comment.body}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
