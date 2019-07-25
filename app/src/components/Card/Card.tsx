import * as React from 'react';
import { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';

import './Card.scss';

class Card extends Component<any> {

    render() {
        return (
            <div className="Card">
                <h2 className="Card--header">sub title</h2>
                <div className="Card--body">
                    <SearchBar />
                </div>
            </div>
        );
    }
}

export default Card;
