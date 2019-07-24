import * as React from 'react';
import { Component } from 'react';

import './App.css';

import Card from '../Card/Card';

class App extends Component<any> {

    render() {
        return (
            <div className="App">
                <div className="App--header">
                    <h1>Musician Finder</h1>
                </div>
            <div className="App--body">
                <Card/>
            </div>
        </div>
    );
  }
}

export default App;
