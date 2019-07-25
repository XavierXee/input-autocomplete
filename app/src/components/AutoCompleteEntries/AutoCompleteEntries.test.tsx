import React from 'react';
import ReactDOM from 'react-dom';
import AutoCompleteEntries from './AutoCompleteEntries';
import { create } from "react-test-renderer";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AutoCompleteEntries autoCompletionData={[]} />, div);
});

it('render correctly', () => {
    const component = create(<AutoCompleteEntries autoCompletionData={[]} />).toJSON();;
    expect(component).toMatchSnapshot();
});