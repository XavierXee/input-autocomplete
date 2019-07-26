import * as React from 'react';
import { Component } from 'react';

import './App.scss';

import SearchBar from "../SearchBar/SearchBar";

class App extends Component<any> {

    private repositoryUrl = process.env.REACT_APP_REPOSITORY_URL;

    render() {
        return (
            <div className="App">
                <header className="App--header">
                    <i className="App--header-icon fas fa-music">&nbsp;</i>
                    <h1>Find Musicians</h1>
                </header>
                <main className="App--body">
                    <SearchBar />
                </main>
                <footer className="App--footer">
                    <a className="App--footer-link" href={this.repositoryUrl} target="_blank" rel="noopener noreferrer">Xavier de Frutos - https://github.com/XavierXee/input-autocomplete</a>
                </footer>
            </div>
    );
  }
}

export default App;
