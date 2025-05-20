import { NavLink } from 'react-router-dom';
import React from "react";

const Post = ({ post }) => {
  if (!post || !post.profile) {
    return <div>Loading...</div>; // or return nothing/null
  }

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
          Likes: {post.likes} Comments: {post.comments?.length || 0}
        </span>

        <span className="card-text">
          <span className="bold title-margin">{post.profile.name}</span> {post.caption}
        </span>

        <div className="comments-wrapper">
          <ul className="comments">
            {post.comments?.map((x, idx) => (
              <li className="active" key={idx}>
                <NavLink to={`/profiles/${x.commenter_id}`}>
                  <strong>{x.commenter_name}:</strong>
                  </NavLink> 
                  {x.body}
              </li>
            ))}
          </ul>
        </div>

        <span className="card-text comments-btn">See more comments</span>
        <span className="card-time"></span>

        <div className="add-comment-container flex-container">
          <span className="card-icon"><i className="bi bi-emoji-smile"></i></span>
          <div className="comment-container">
            <input className="comment-input" type="text" placeholder="Add a comment...." />
          </div>
          <a href="#" className="publish">Publish</a>
        </div>
      </div>
    </div>
  );
};

export default Post;
