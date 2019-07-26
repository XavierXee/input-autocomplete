import React from 'react';

import { AutoCompleteInputProps } from "../../interfaces/AutoCompleteInputProps";

import './AutoCompleteInput.scss';

class AutoCompleteInput extends React.Component<AutoCompleteInputProps> {
    constructor(props: any) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleChange(event: React.SyntheticEvent): void {
        this.props.onChange((event.target as HTMLInputElement).value);
    }

    handleBlur(): void {
        this.props.onBlur();
    }

    render() {
        return (
            <span className="AutoCompleteInput">
                <i className="AutoCompleteInput--icon fas fa-search">&nbsp;</i>
                <input className="AutoCompleteInput--field" type="text" value={this.props.searchString} onBlur={this.handleBlur} onChange={this.handleChange} />
            </span>
        );
    }
}

export default AutoCompleteInput;
