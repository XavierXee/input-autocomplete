import React from 'react';
import ReactDOM from 'react-dom';
import AutoCompleteInput from './AutoCompleteInput';
import { create } from "react-test-renderer";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AutoCompleteInput searchString={'test'} onBlur={() => {}} onChange={() => {}} />, div);
});

it('render correctly', () => {
    const component = create(<AutoCompleteInput searchString={'test'} onBlur={() => {}} onChange={() => {}} />).toJSON();;
    expect(component).toMatchSnapshot();
});