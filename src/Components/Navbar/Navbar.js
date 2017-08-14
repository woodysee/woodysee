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
          <Link to="/"><img id="navbar-logo" src={logo}/></Link>
          <ul id="navbar-list">
            <li id="navbar-list-item-first">
              <Link id="navbar-first-Link" to="/projects">PROJECTS</Link>
            </li>
            <li id="navbar-list-item-middle">
              <Link id="navbar-middle-Link" to="/showreel">SHOWREEL</Link>
            </li>
            <li id="navbar-list-item-last">
              <Link id="navbar-last-Link" to="/contact">GET IN TOUCH</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
