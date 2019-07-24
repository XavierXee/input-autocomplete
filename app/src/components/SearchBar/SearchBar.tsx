import * as React from 'react';
import { Component } from 'react';

import './SearchBar.css';

class SearchBar extends Component {
    render() {
        return (
            <div className="SearchBar">
                <input className="SearchBar--input" type="text"></input>
                <button type="submit">Find</button>
            </div>
        );
    }
}

export default SearchBar;
