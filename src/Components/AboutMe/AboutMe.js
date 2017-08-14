//Import package dependencies
import React, { Component } from 'react';
import './AboutMe.css';

//Importing static assets
import profilePicture from './about-me-profile-square.png';

class AboutMe extends Component {

  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div id="landing-aboutme">
        <div className="row aboutme-container">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <img id="aboutme-picture" src={profilePicture}/>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <h1 id="aboutme-h1">I'm Woody.</h1>
            <h2 id="aboutme-h2">I like films, photography, video production, story-rich video games, and the Internet.</h2>
            <h3 id="aboutme-h3">I hail from a business management / marketing / corporate communications background, and I am also informally experienced in photography, video production and desktop publishing.
            <br/><br/>Now I develop web apps to fulfil a quest to develop friendly and engaging browser experiences for fellow end-users.</h3>
          </div>
        </div>{/* /.row aboutme-container */}
      </div>
    );
  }
}

export default AboutMe;
