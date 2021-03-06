// @ts-nocheck
//Importing package dependencies
import React, { Component } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

//Importing static assets
import logo from './personal-logo-circle.svg';

class Navbar extends Component {
  /* This function scrolls back up after clicking the link */
  onClick = () => {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera
    document.documentElement.scrollTop = 0; // For IE and Firefox
  };

  render() {
    return (
      <div>
        <nav id="navbar">
          <Link to="/" onClick={this.onClick}>
            <img alt="Floating navbar logo" id="navbar-logo" src={logo} />
          </Link>
          <ul id="navbar-list">
            <li id="navbar-list-item-first">
              <Link
                id="navbar-first-Link"
                to="/projects"
                onClick={this.onClick}
              >
                PROJECTS
              </Link>
            </li>
            <li id="navbar-list-item-middle">
              <Link
                id="navbar-middle-Link"
                to="/showreel"
                onClick={this.onClick}
              >
                SHOWREEL
              </Link>
            </li>
            <li id="navbar-list-item-last">
              <Link id="navbar-last-Link" to="/contact" onClick={this.onClick}>
                GET IN TOUCH
              </Link>
            </li>
          </ul>
        </nav>
        <li className="nav-item dropdown" id="navbar-mobile">
          <div
            className="nav-link dropdown-toggle"
            data-toggle="dropdown"
            role="presentation"
          >
            <img alt="Floating navbar logo" id="navbar-logo" src={logo} />
          </div>
          <div className="dropdown-menu">
            <Link
              to="/"
              className="dropdown-item"
              id="pills-dropdown1-tab"
              role="tab"
              aria-controls="pills-dropdown1"
              onClick={this.onClick}
            >
              ABOUT
            </Link>
            <Link
              to="/projects"
              className="dropdown-item"
              id="pills-dropdown2-tab"
              role="tab"
              aria-controls="pills-dropdown2"
              onClick={this.onClick}
            >
              PROJECTS
            </Link>
            <Link
              to="/showreel"
              className="dropdown-item"
              id="pills-dropdown3-tab"
              role="tab"
              aria-controls="pills-dropdown3"
              onClick={this.onClick}
            >
              SHOWREEL
            </Link>
            <Link
              to="/contact"
              className="dropdown-item"
              id="pills-dropdown4-tab"
              role="tab"
              aria-controls="pills-dropdown4"
              onClick={this.onClick}
            >
              GET IN TOUCH
            </Link>
          </div>
        </li>
      </div>
    );
  }
}

export default Navbar;
