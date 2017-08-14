//Import package dependencies
import React, { Component } from 'react';
import './Showreel.css';

//Importing static assets

//Importing React components
import Navbar from '../Navbar/Navbar';

class Showreel extends Component {
  render() {
    return (
      <div className="showreel">

        <Navbar/>

        <h1>Showreel</h1>

        <div className="row projects-grid">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 project">
            <iframe className="projects-video-frame" src="https://player.vimeo.com/video/49072284" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
            <h3 className="project-title">SMU FE 2012: Convocation</h3>
            <p className="project-description">Opening video of SMU Convocation 2012 Pre-formal Showcase</p>
            <div className="project-role">Direction, camera & editing</div>
          </div>{/* /.project */}
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 project">
            <iframe className="projects-video-frame" src="https://player.vimeo.com/video/49072284" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
            <h3 className="project-title">SMU FE 2012: Convocation</h3>
            <p className="project-description">Opening video of SMU Convocation 2012 Pre-formal Showcase</p>
            <div className="project-role">Direction, camera & editing</div>
          </div>{/* /.project */}
        </div>{/* /.row projects-grid */}

      </div>
    );
  }
}

export default Showreel;
