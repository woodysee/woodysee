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
        <Navbar />

        <h1 id="projects-title">Projects</h1>

        <div className="row projects-grid">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 project">
            <img className="project-img project-airfrov" />
            <h3 className="project-title">Airfrov</h3>
            <p className="project-description">
              Enables shoppers to tap on the burgeoning travellers network to
              get their favourite brands and unique items, from all over the
              world.
            </p>
            <div className="project-role">
              Incremental development of the website and backend with the UX and
              product teams
            </div>
            <a className="project-contact-link" href="https://www.airfrov.com">
              Live
            </a>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 project">
            <img className="project-img project-frizzy" />
            <h3 className="project-title">Frizzy</h3>
            <p className="project-description">
              Reusable UI component library for web pages.
            </p>
            <div className="project-role">Developer</div>
            <a
              className="project-contact-link"
              href="https://www.npmjs.com/package/frizzy"
            >
              Distribution
            </a>
            <a
              className="project-contact-link"
              href="https://staging.airfrov.com/frizzy/demo"
            >
              Demo
            </a>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 project">
            <img className="project-img project-expressive" />
            <h3 className="project-title">expressive</h3>
            <p className="project-description">
              Real-time web application that facilitates Q & A sessions with
              audience collaboration.
            </p>
            <div className="project-role">
              Presentational components for the rooms & mobile responsive
              navbar; Container component for joining rooms
            </div>
            <a
              className="project-contact-link"
              href="https://github.com/woodysee/expressive"
            >
              GitHub
            </a>
            <a
              className="project-contact-link"
              href="https://expressive-86f54.firebaseapp.com"
            >
              Live
            </a>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 project">
            <img className="project-img project-swapbooks" />
            <h3 className="project-title">Swap Books</h3>
            <p className="project-description">
              Localised book sharing web application.
            </p>
            <div className="project-role">
              Presentational components for site & mobile responsive navbar;
              Container component for instant book search
            </div>
            <a
              className="project-contact-link"
              href="https://github.com/woodysee/wdi-project-3-frontend"
            >
              GitHub
            </a>
            <a
              className="project-contact-link"
              href="http://swapbooks.woodysee.com"
            >
              Live
            </a>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 project">
            <img className="project-img project-deliverydebts" />
            <h3 className="project-title">Delivery & Debts</h3>
            <p className="project-description">
              Abstract minimalist game that challenges the player to deliver
              lunches and settle a debt before the timer runs out.
            </p>
            <a
              className="project-contact-link"
              href="https://github.com/woodysee/delivery-and-debts"
            >
              GitHub
            </a>
            <a
              className="project-contact-link"
              href="https://woodysee.github.io/delivery-and-debts/"
            >
              Live
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
