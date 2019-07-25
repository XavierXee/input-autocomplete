import React from 'react';
import ReactDOM from 'react-dom';
import AutoCompleteSubmit from './AutoCompleteSubmit';
import { create } from "react-test-renderer";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AutoCompleteSubmit onSubmit={() => {}}/>, div);
});

it('render correctly', () => {
    const component = create(<AutoCompleteSubmit onSubmit={() => {}}/>).toJSON();;
    expect(component).toMatchSnapshot();
});