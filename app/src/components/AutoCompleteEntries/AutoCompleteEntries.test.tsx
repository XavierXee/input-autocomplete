import React from 'react';
import ReactDOM from 'react-dom';
import AutoCompleteEntries from './AutoCompleteEntries';
import { create } from "react-test-renderer";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AutoCompleteEntries lastSearch={'test'} autoCompletionData={[]} onClick={() => {}} />, div);
});

it('render correctly', () => {
    const component = create(<AutoCompleteEntries lastSearch={'test'} autoCompletionData={[]} onClick={() => {}} />).toJSON();;
    expect(component).toMatchSnapshot();
});