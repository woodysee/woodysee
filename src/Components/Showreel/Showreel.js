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

        <h1 id="showreel-title">Showreel</h1>

        <div className="row projects-grid">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 project">
            <iframe className="project-video-frame" src="https://player.vimeo.com/video/49072284?color=A1EBFF&title=0&byline=0&portrait=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
            <h3 className="project-title">SMU FE 2012: Convocation</h3>
            <p className="project-description">Opening video of SMU Convocation 2012 Pre-formal Showcase</p>
            <div className="project-role">Direction, camera & editing</div>
          </div>{/* /.project */}
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 project">
            <iframe className="project-video-frame" src="https://player.vimeo.com/video/55931250?color=A1EBFF&title=0&byline=0&portrait=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
            <h3 className="project-title">The Shituation</h3>
            <p className="project-description">A young man's visit to the toilet takes him outside his comfort zone.</p>
            <div className="project-role">Camera & editing</div>
          </div>{/* /.project */}
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 project">
            <iframe className="project-video-frame" src="https://player.vimeo.com/video/49582666?color=A1EBFF&title=0&byline=0&portrait=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
            <h3 className="project-title">VPH 2012: Auditions</h3>
            <p className="project-description">This video is made to document the preliminary auditions of the Voice Pesonality Hunt, a university-wide stage hosting competition in Singapore Management University.</p>
            <div className="project-role">Production, camera, editing & title design</div>
          </div>{/* /.project */}
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 project">
            <iframe className="project-video-frame" src="https://player.vimeo.com/video/42646324?color=A1EBFF&title=0&byline=0&portrait=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
            <h3 className="project-title">Smugger Zombies</h3>
            <p className="project-description">In the midst of a zombie outbreak occurring right before final examinations, four best friends attempt to survive, discovering the truth about the nature of the outbreak and that they may just have the power to save the school.</p>
            <div className="project-role">Direction</div>
          </div>

        </div>{/* /.row projects-grid */}

      </div>
    );
  }
}

export default Showreel;
