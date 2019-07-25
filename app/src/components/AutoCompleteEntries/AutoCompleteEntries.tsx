import React from 'react';

import { AutoCompleteEntriesProps } from "../../interfaces/AutoCompleteEntriesProps";

import './AutoCompleteEntries.css';

class AutoCompleteEntries extends React.Component<AutoCompleteEntriesProps> {
    constructor(props: any) {
        super(props);
        this.handleSelect = this.handleSelect.bind(this);
    }

    // TODO: type event
    handleSelect(event: any): void {
        //this.props.onChange(event.target.value);
    }

    createLines = () => {
        if (!this.props.autoCompletionData || !this.props.autoCompletionData.length) return '';

        // TODO: type line HTML element
        const lines: any[] = [];
        this.props.autoCompletionData.forEach((data, i) => {
            lines.push(<li key={i} className='AutoCompleteEntries--list-entry'>{data.name}</li>)
        });
        return lines;
    };

    render() {
        return (
            <div className="AutoCompleteEntries">
                <ul className="AutoCompleteEntries--list">
                    {this.createLines()}
                </ul>
            </div>
        );
    }
}

export default AutoCompleteEntries;
