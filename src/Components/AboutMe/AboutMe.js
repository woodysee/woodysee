//Import package dependencies
import React, { Component } from 'react';
import './AboutMe.css';

class AboutMe extends Component {
  render() {
    return (
      <div id="landing-aboutme">
        <div className="row aboutme-container">
          <div className="col-md-6">
            Picture
          </div>
          <div className="col-md-6">
            Copy about me
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
