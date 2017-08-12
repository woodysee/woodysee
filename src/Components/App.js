//Importing package dependencies
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';

//Importing site components
import Landing from './Landing/Landing';

class App extends Component {
  render() {
    return (
      <Router>
         <Route exact path="/" component={Landing}/>
      </Router>
    );
  }
}

export default App;
