// Sidebar.js
import React from 'react';

const Sidebar = ({ users }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-menu-container">
        <div className="sidebar-card sidebar-header grid">
          <img
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            alt=""
            className="sidebar-img sidebar-hd-img"
          />
          <span className="sidebar-title card-title">Lorem, ipsum.</span>
          <span className="card-subtitle sidebar-subtitle">Lorem.</span>
          <span className="sidebar-btn">Change</span>
        </div>

        <div className="suggestions-header grid">
          <span className="suggestions-text">Suggestions for you</span>
          <span className="sidebar-btn-alt">See all</span>
        </div>

        {users.map((user) => (
          <div key={user.id} className="sidebar-card sidebar-card-alt grid">
            <img
              src={user.profileImage || 'https://example.com/default-user.jpg'}
              alt=""
              className="sidebar-img side-bar-img-alt"
            />
            <span className="sidebar-title card-title">{user.username}</span>
            <span className="card-subtitle sidebar-subtitle sidebar-subtitle-alt">
              {user.bio}
            </span>
            <span className="sidebar-btn">Follow</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
