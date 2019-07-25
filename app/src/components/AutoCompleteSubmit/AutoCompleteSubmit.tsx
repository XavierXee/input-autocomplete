import React from 'react';

import { AutoCompleteSubmitProps } from "../../interfaces/AutoCompleteSubmitProps";

import './AutoCompleteSubmit.scss';

class AutoCompleteSubmit extends React.Component<AutoCompleteSubmitProps> {
    constructor(props: any) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // TODO: type event
    handleSubmit(event: any): void {
        event.preventDefault();
        this.props.onSubmit();
    }

    render() {
        return (
            <button className="AutoCompleteSubmit" onClick={this.handleSubmit}>Find</button>
        );
    }
}

export default AutoCompleteSubmit;
