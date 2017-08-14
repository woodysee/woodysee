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

      </div>
    );
  }
}

export default Showreel;
