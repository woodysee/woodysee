//Import package dependencies
import React, { Component } from 'react';
import './Projects.css';

//Importing static assets

//Importing React components
import Navbar from '../Navbar/Navbar';

class Projects extends Component {
  render() {
    return (
      <div className="projects">

        <Navbar/>

        <h1 id="projects-title">Projects</h1>

        <div className="row projects-grid">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 project">
            <img className="project-img project-expressive"/>
            <h3 className="project-title">expressive</h3>
            <p className="project-description">Real-time web application that facilitates Q & A sessions with audience collaboration.</p>
            <div className="project-role">Presentational components for the rooms & mobile responsive navbar; Container component for joining rooms</div>
            <a className="project-contact-link" href="https://github.com/woodysee/expressive">GitHub</a>
            <a className="project-contact-link" href="https://expressive-86f54.firebaseapp.com">Live</a>
          </div>{/* /.project */}
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 project">
            <img className="project-img project-swapbooks"/>
            <h3 className="project-title">Swap Books</h3>
            <p className="project-description">Localised book sharing web application.</p>
            <div className="project-role">Presentational components for site & mobile responsive navbar; Container component for instant book search</div>
            <a className="project-contact-link" href="https://github.com/woodysee/wdi-project-3-frontend">GitHub</a>
            <a className="project-contact-link" href="http://swapbooks.online">Live</a>
          </div>{/* /.project */}
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 project">
            <img className="project-img project-tollchecker"/>
            <h3 className="project-title">Tollchecker <span className="project-title-wip">WIP</span></h3>
            <p className="project-description">Interactive map where users can see the locations of Electronic Road Pricing gantries.</p>
            <a className="project-contact-link" href="https://github.com/woodysee/tollchecker">GitHub</a>
            <a className="project-contact-link" href="https://woodys-tollchecker.herokuapp.com">Live</a>
          </div>{/* /.project */}
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 project">
            <img className="project-img project-deliverydebts"/>
            <h3 className="project-title">Delivery & Debts <span className="project-title-wip">WIP</span></h3>
            <p className="project-description">Abstract minimalist game that challenges the player to deliver lunches and settle a debt before the timer runs out.</p>
            <a className="project-contact-link" href="https://github.com/woodysee/sg-wdi-10-project-1">GitHub</a>
            <a className="project-contact-link" href="https://woodysee.github.io/sg-wdi-10-project-1/">Live</a>
          </div>{/* /.project */}
        </div>{/* /.row projects-grid */}

      </div>
    );
  }
}

export default Projects;
