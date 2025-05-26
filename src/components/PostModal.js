import React, { useEffect, useState } from 'react';
import Post from './Post';
import './PostModal.css'; // optional styling

const PostModal = ({ post, onClose }) => {
    const [fetchedPost, setFetchedPost] = useState(null);
  
    useEffect(() => {
      if (post?.id) {
        fetch(`${process.env.REACT_APP_API_URL}/posts/${post.id}`)
          .then(res => {
            if (!res.ok) throw new Error('Failed to fetch post');
            return res.json();
          })
          .then(data => {
            setFetchedPost(data);
          })
          .catch(err => {
            console.error('Error fetching post:', err);
            setFetchedPost(null);
          });
      } else {
        // Clear data when no post is selected
        setFetchedPost(null);
      }
    }, [post?.id]);
  
    // Show nothing if no post selected at all
    if (!post) return null;

    return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <Post post={fetchedPost || post} />
      </div>
    </div>
  );
};

export default PostModal;
