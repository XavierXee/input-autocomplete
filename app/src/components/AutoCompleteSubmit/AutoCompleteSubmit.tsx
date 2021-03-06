import React from 'react';

import { AutoCompleteSubmitProps } from "../../interfaces/AutoCompleteSubmitProps";

import './AutoCompleteSubmit.scss';

class AutoCompleteSubmit extends React.Component<AutoCompleteSubmitProps> {
    constructor(props: any) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event: React.SyntheticEvent): void {
        event.preventDefault();
        this.props.onSubmit();
    }

    render() {
        return (
            <button id="SearchButton" className="AutoCompleteSubmit" onClick={this.handleSubmit}>Search</button>
        );
    }
}

export default AutoCompleteSubmit;
