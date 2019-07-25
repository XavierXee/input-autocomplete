import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar';
import { create } from "react-test-renderer";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SearchBar />, div);
});

it('render correctly', () => {
    const component = create(<SearchBar />).toJSON();;
    expect(component).toMatchSnapshot();
});