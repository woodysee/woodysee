import React, { Component } from 'react';
import logo from './personal-logo-circle.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Woody See's website</h2>
        </div>
        <p className="App-intro">
          Stay tuned for more updates!
        </p>
      </div>
    );
  }
}

export default App;
