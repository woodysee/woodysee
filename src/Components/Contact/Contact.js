//Import package dependencies
import React, { Component } from 'react';
import './Contact.css';

//Importing static assets

//Importing React components
import Navbar from '../Navbar/Navbar';

class Contact extends Component {

  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div className="contact">
        <Navbar/>
        <h1 id="contact-title">Don't be shy!</h1>
        <h2 id="contact-tagline">Come say hi, and drop by my</h2>
        <p id="contact-description">
          <br/>
          <a className="contact-link" href="https://www.github.com/woodysee">code repositories</a> 
          or my <a className="contact-link" href="https://www.linkedin.com/in/woodysee">LinkedIn page</a>.
        </p>
      </div>
    );
  }
}

export default Contact;
