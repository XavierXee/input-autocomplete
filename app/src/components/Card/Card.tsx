import * as React from 'react';
import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class Card extends Component {
  render() {

    console.log(process.env.REACT_APP_API_BASE_URL);

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Card;
