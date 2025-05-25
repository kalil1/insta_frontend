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
    }, 300); // debounce by 300ms

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
    <header className="grid navynav main-header">
      <div className="flex-container header-container">
        <span className="logo logo-nav header-item">Lategram</span>

        <div className="header-item searchbar">
          <div className="searchbar-container">
            <label htmlFor="searchbar">
              <div className="flex-container">
                <div className="search-icon-container">
                  <svg className="search-nav-icon" viewBox="0 0 512 512" width="100" title="search">
                    <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
                  </svg>
                </div>
                <input
                  id="searchbar"
                  type="text"
                  className="searchbar-input"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </label>

            {searchResults.length > 0 && (
              <div className="search-results-dropdown">
                <ul className="search-results-dropdown-list">
                  {searchResults.map((profile) => (
                    <li key={profile.id}>
                      <NavLink to={`/profiles/${profile.id}`}>
                        <img src={profile.profile_pic} alt="profile" width={30} height={30} />
                        {profile.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>


        <nav className="header-item main-nav">
          <ul className="navbar flex-container">
            <li className="navbar-item">
              <NavLink to="/" exact="true">Home<i className="bi bi-house-door-fill"></i></NavLink>
            </li>
            <li className="navbar-item">
              <NavLink to="/posts">Explore Page<i className="bi bi-compass"></i></NavLink>
            </li>
            <li className="navbar-item">
              {profileData && (
                <NavLink to={`/profiles/${profileData.id}`}>
                  <img src={profileData.profile_pic} alt="Profile" />
                </NavLink>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
