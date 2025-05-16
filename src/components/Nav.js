import { NavLink } from 'react-router-dom';
import React from 'react';

const Nav = () => {
    return (
        <header className="grid main-header">
            <div className="flex-container header-container">
                <span className="logo logo-nav header-item">
                    Lategram
                </span>

                <div className="header-item searchbar">
                    <label htmlFor="searchbar">
                        <div className="flex-container">
                            <div className="search-icon-container">
                                <svg className="search-nav-icon" viewBox="0 0 512 512" width="100" title="search">
                                    <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
                                </svg>
                            </div>

                            <input id="searchbar" type="text" className="searchbar-input" placeholder="Search..." />
                        </div>
                    </label>
                </div>
                <nav className="header-item main-nav">
                    <ul className="navbar flex-container">
                        <li className="navbar-item">
                            <NavLink to="/" exact>
                                Home<i className="bi bi-house-door-fill"></i>
                            </NavLink>
                        </li>
                        <li className="navbar-item">
                            <NavLink to="/posts">
                            Explore Page<i className="bi bi-send"></i>
                            </NavLink>
                        </li>
                        <li className="navbar-item">
                            <NavLink to="/form">
                                Form<i className="bi bi-plus-square"></i>
                            </NavLink>
                        </li>
                        {/* <li className="navbar-item">
                            <NavLink to="/stories">
                                Stories<i className="bi bi-compass"></i>
                            </NavLink>
                        </li> */}
                        <li className="navbar-item">
                            <NavLink to="/profile">
                              <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Nav;
