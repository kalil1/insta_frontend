import { NavLink } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import axios from "axios";

const Nav = () => {
  const [profileData, setProfileData] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const id = Math.floor(Math.random() * 101) + 1;

  useEffect(() => {
    getProfile(id);
  }, []);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchQuery.trim() !== '') {
        searchProfiles(searchQuery);
      } else {
        setSearchResults([]);
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);

  const getProfile = async (id) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/profiles/${id}`);
      if (response.data && response.data.profile) {
        setProfileData(response.data.profile);
      }
    } catch (error) {
      console.error("Failed to fetch profile:", error);
    }
  };

  const searchProfiles = async (query) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/profiles/search`, {
        params: { query }
      });
      if (response.data && response.data.profiles) {
        setSearchResults(response.data.profiles);
      }
    } catch (error) {
      console.error("Search failed:", error);
    }
  };

  return (
    <div className="navigation">
      <div className="logo">
        <NavLink className="no-underline" to="/">Instagram</NavLink>
      </div>

      <div className="navigation-search-container">
        <i className="fa fa-search"></i>
        <input
          className="search-field"
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {searchResults.length > 0 && (
          <div className="search-container">
            <div className="search-container-box">
              <div className="search-results">
                {searchResults.map((profile) => (
                  <div key={profile.id}>
                    <NavLink to={`/profiles/${profile.id}`}>
                      <img src={profile.profile_pic} alt="profile" width={30} height={30} />
                      {profile.name}
                    </NavLink>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="navigation-icons">
        <NavLink to="/posts" className="navigation-link">
          <i className="far fa-compass"></i>
        </NavLink>

        <a className="navigation-link notifica">
          <i className="far fa-heart">
            <div className="notification-bubble-wrapper">
              <div className="notification-bubble">
                <span className="notification-count">99</span>
              </div>
            </div>
          </i>
        </a>

        {profileData && (
          <NavLink to={`/profiles/${profileData.id}`} className="navigation-link">
            <i className="far fa-user-circle"></i>
          </NavLink>
        )}

        <NavLink to="/signout" className="navigation-link">
          <i className="fas fa-sign-out-alt"></i>
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
