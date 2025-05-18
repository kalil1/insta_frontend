import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ users }) => {
  // Limit to 10 profiles
  const displayedProfiles = users.slice(0, 10);
  const randomProfile = users[Math.floor(Math.random() * users.length)];
  const truncateBio = (bio) => {
    if (!bio) return '';
    return bio.length > 45 ? bio.substring(0, 45) + '...' : bio;
  };
    
  return (
    <div className="sidebar">
      <div className="sidebar-menu-container">
      {randomProfile && (
          <div className="sidebar-card sidebar-header grid">
            <img
              src={randomProfile.profile_pic}
              alt=""
              className="sidebar-img sidebar-hd-img"
            />
            <span className="sidebar-title card-title">{randomProfile.name}</span>
            <span className="card-subtitle sidebar-subtitle">{truncateBio(randomProfile.bio)}</span>
            <NavLink to={`/profiles/${randomProfile.id}`}>
              <span className="sidebar-btn">Show</span>
            </NavLink>
          </div>
        )}
        <div className="suggestions-header grid">
          <span className="suggestions-text">Suggestions for you</span>
          <span className="sidebar-btn-alt">See all</span>
        </div>

        {displayedProfiles.map((profile) => (
          <div key={profile.id} className="sidebar-card sidebar-card-alt grid">
            <img
              src={profile.profileImage || '/no_avatar.png'}
              alt=""
              className="sidebar-img side-bar-img-alt"
            />
            <span className="sidebar-title card-title">{profile.name}</span>
            <span className="card-subtitle sidebar-subtitle sidebar-subtitle-alt">
              {truncateBio(profile.bio)}
            </span>
            <NavLink to={`/profiles/${profile.id}`}>
              <span className="sidebar-btn">Show</span>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
