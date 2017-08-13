//Import package dependencies
import React, { Component } from 'react';
import './Projects.css';

//Importing static assets

//Importing React components
import Navbar from '../Navbar/Navbar';

class Projects extends Component {
  render() {
    return (
      <div className="Projects">

        <Navbar/>

        <h1>Projects</h1>

        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
            <h3>expressive</h3>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
            <h3>Swap Books</h3>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
            <h3>Tollchecker</h3>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
            <h3>Delivery & Debts</h3>
          </div>
        </div>{/* /.row */}

      </div>
    );
  }
}

export default Projects;
