//Importing package dependencies
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';

//Importing site components
import Landing from './Landing/Landing';
import Projects from './Projects/Projects';
import Showreel from './Showreel/Showreel';
import Contact from './Contact/Contact';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
         <Route exact path="/" component={Landing}/>
         <Route path="/projects" component={Projects}/>
         <Route path="/showreel" component={Showreel}/>
         <Route path="/contact" component={Contact}/>
        </div>
      </Router>
    );
  }
}

export default App;
