import React from "react";

const Post = ({post}) => {
  return (
        
    <div className="card-wrapper flex-container">
      <div className="card-header grid">
        <div className="header-img-container flex-container">
          <img className="card-header-img" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt=""/>
        </div>
        <span className="card-title">
          {post.profile.name}
        </span>
          
         <span className="card-subtitle">Lorem, ipsum.</span>
        <div className="card-opt-btn flex-container"><i className="bi bi-three-dots"></i></div>
      </div>
      <div className="card-img-container">
        <img className="card-img" src="https://images.unsplash.com/photo-1587502624372-45627391a31f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" alt=""/>
      </div>
      <div className="card-data flex-container">
        <div className="card-icons flex-container"> 
        <span className="card-icon card-icon-left"><i className="bi bi-heart"></i></span>
        <span className="card-icon card-icon-left"><i className="bi bi-chat"></i></span>
        <span className="card-icon card-icon-left"><i className="bi bi-send"></i></span>
        <span className="card-icon card-icon-right"><i className="bi bi-bookmark"></i></span>
        </div>
        <span className="bold card-text">{post.likes} Likes</span>
        <span className="card-text"><span className="bold title-margin">{post.profile.name}</span>{post.caption}</span>
        <div className="comments-wrapper">
          <ui className="comments">
            {post.comments.map((x) => (
              <li className="active">
                <strong>{x.profile.name}:</strong> {x.body}
              </li>
            ))}
          </ui>
        </div>
        <span className="card-text comments-btn">See more comments</span>
        <span className="card-time"></span>
        <div className="add-comment-container flex-container">
          <span className="card-icon"><i className="bi bi-emoji-smile"></i></span>
          <div className="comment-container">
            <input className="comment-input" type="text" placeholder="Add a comment...."/>
          </div>
          
          <a href="#" className="publish" >Publish</a>
        </div>
        
      </div>
  
    </div>
    
  );
};

export default Post;
