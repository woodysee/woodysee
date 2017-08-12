//Importing package dependencies
import React, { Component } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

//Importing static assets
import logo from './personal-logo-circle.svg';

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav id="navbar">
          <img id="navbar-logo" src={logo}/>
          <ul id="navbar-list">
            <li id="navbar-list-item-first">
              PROJECTS
            </li>
            <li id="navbar-list-item-middle">
              SHOWREEL
            </li>
            <li id="navbar-list-item-last">
              GET IN TOUCH
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
