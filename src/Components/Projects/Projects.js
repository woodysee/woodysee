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
            <span className="project-role">Presentational components</span>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 project">
            <img className="project-img project-swapbooks"/>
            <h3 className="project-title">Swap Books</h3>
            <p className="project-description">Localised book sharing web application.</p>
            <span className="project-role">Presentational & container components</span>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 project">
            <img className="project-img project-tollchecker"/>
            <h3 className="project-title">Tollchecker <span className="project-title-wip">WIP</span></h3>
            <p className="project-description">Interactive map where users can see the locations of Electronic Road Pricing gantries.</p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 project">
            <img className="project-img project-deliverydebts"/>
            <h3 className="project-title">Delivery & Debts <span className="project-title-wip">WIP</span></h3>
            <p className="project-description">Abstract minimalist game that challenges the player to deliver lunches and settle a debt before the timer runs out.</p>
          </div>
        </div>{/* /.row */}

      </div>
    );
  }
}

export default Projects;
