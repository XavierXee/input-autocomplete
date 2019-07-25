import React from 'react';

import { AutoCompleteInputProps } from "../../interfaces/AutoCompleteInputProps";

import './AutoCompleteInput.scss';

class AutoCompleteInput extends React.Component<AutoCompleteInputProps> {
    constructor(props: any) {
        super(props);

        console.log(this.props);

        this.handleChange = this.handleChange.bind(this);
    }

    // TODO: type event
    handleChange(event: any): void {
        this.props.onChange(event.target.value);
    }

    render() {
        return (
            <input className="AutoCompleteInput" type="text" value={this.props.searchString} onChange={this.handleChange} />
        );
    }
}

export default AutoCompleteInput;
