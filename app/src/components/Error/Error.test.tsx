import React from 'react';
import ReactDOM from 'react-dom';
import Error from './Error';
import { create } from "react-test-renderer";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Error errorMessage="test-error" />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('has proper properties', () => {
    const component = create(<Error errorMessage="test-error" />);
    const instance = component.getInstance();
    // @ts-ignore
    expect(instance.props.errorMessage).toBe("test-error");
});

it('render correctly', () => {
    const component = create(<Error errorMessage="test-error"/>).toJSON();
    expect(component).toMatchSnapshot();
});