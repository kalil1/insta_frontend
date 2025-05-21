import { createConsumer } from "@rails/actioncable";
import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import axios from "axios";

const Post = ({ post }) => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState(post.comments || []);

  useEffect(() => {
    const cableConnection = createConsumer(`${process.env.REACT_APP_API_URL}/cable`);
  
    const subscription = cableConnection.subscriptions.create(
      { channel: "CommentChannel", post_id: post.id },
      {
        received: (data) => {
          const newComment = {
            body: data.body,
            commenter_name: data.commenter_name,
            commenter_id: data.commenter_id,
            profile: data.profile,
          };
          setComments((prev) => [...prev, newComment]);
        },
      }
    );
  
    return () => {
      subscription.unsubscribe();
      cableConnection.disconnect(); 
    };
  }, [post.id]);

  const handleCommentChange = (e) => setComment(e.target.value);

  const handleSubmitComment = async () => {
    if (!comment.trim()) return;

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/comments`, {
        body: comment,
        post_id: post.id,
        profile_id: 1, // hard coding this for now
      });

      setComment(""); 
    } catch (error) {
      console.error("Comment submission failed", error);
    }
  };

  return (
    <div className="post-card flex-container">
      <div className="card-header grid">
      <NavLink to={`/profiles/${post.profile.id}`}>
        <div className="header-img-container flex-container">
          <img className="card-header-img" src={post.profile.profile_pic} alt="Profile" />
        </div>
        </NavLink>
        <NavLink to={`/profiles/${post.profile.id}`}>
          <span className="card-title">{post.profile.name}</span>
        </NavLink>
        <span className="card-subtitle">{post.profile.bio}</span>
        <div className="card-opt-btn flex-container"><i className="bi bi-three-dots"></i></div>
      </div>

      <div className="card-img-container">
        <img className="card-img" src={post.post_img} alt="Post" />
      </div>

      <div className="card-data flex-container">
        <div className="card-icons flex-container">
          <span className="card-icon card-icon-left"><i className="bi bi-heart"></i></span>
          <span className="card-icon card-icon-left"><i className="bi bi-chat"></i></span>
          <span className="card-icon card-icon-left"><i className="bi bi-send"></i></span>
          <span className="card-icon card-icon-right"><i className="bi bi-bookmark"></i></span>
        </div>

        <span className="bold card-text">
          Likes: {post.likes} Comments: {comments.length}
        </span>

        <span className="card-text">
          <span className="bold title-margin">{post.profile.name}</span> {post.caption}
        </span>

        <div className="comments-wrapper">
          <ul className="comments">
            {comments.map((x, idx) => (
              <li className="active" key={idx}>
                <NavLink to={`/profiles/${x.commenter_id}`}>
                  <strong>{x.commenter_name}:</strong>
                </NavLink> 
                {x.body}
            </li>
            ))}
          </ul>
        </div>

        <div className="add-comment-container flex-container">
          <span className="card-icon"><i className="bi bi-emoji-smile"></i></span>
          <div className="comment-container">
            <input
              className="comment-input"
              type="text"
              placeholder="Add a comment..."
              value={comment}
              onChange={handleCommentChange}
            />
          </div>
          <a href="#" className="publish" onClick={(e) => { e.preventDefault(); handleSubmitComment(); }}>
            Publish
          </a>
        </div>
      </div>
    </div>
  );
};

export default Post;
