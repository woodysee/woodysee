//Import package dependencies
import React, { Component } from 'react';
import './Landing.css';

//Importing static assets
import seeBelowArrow from './see-below-arrow.svg';

//Importing React components
import Navbar from '../Navbar/Navbar';
import AboutMe from '../AboutMe/AboutMe';

class Landing extends Component {

  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div className="landing">

        <Navbar/>

        <h1>Hello &amp; welcome.</h1>
        <h2>I am a web developer who aspires to build friendly user interfaces &amp; good user experiences.</h2>
        <h3>Let your <span>passion</span> be my <span>mission</span>.</h3>

        <img id="about-me-header-arrow" src={seeBelowArrow}/>
        <label id="about-me-header-arrow-label">ABOUT MYSELF</label>
        <AboutMe/>

      </div>
    );
  }
}

export default Landing;
