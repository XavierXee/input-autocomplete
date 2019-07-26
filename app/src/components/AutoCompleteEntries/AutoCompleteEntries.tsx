import React from 'react';

import { AutoCompleteEntriesProps } from "../../interfaces/AutoCompleteEntriesProps";

import './AutoCompleteEntries.scss';

class AutoCompleteEntries extends React.Component<AutoCompleteEntriesProps> {
    constructor(props: any) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleMouseOver = this.handleMouseOver.bind(this);
    }

    handleClick(event: any): void {
        event.preventDefault();
        const target = !event.target.getAttribute('data-name') ? event.target.parentElement : event.target;
        if(target.getAttribute('data-type') === 'no_items') {
            this.props.onClick('');
        } else {
            this.props.onClick(target.getAttribute('data-name'));
        }
    }

    handleMouseOver(event: any) {
        document.querySelectorAll('.AutoCompleteEntries--list-entry').forEach((entry) => {
            entry.classList.remove('AutoCompleteEntries--list-entry__active');
        });

        let target = event.target;
        if(!target.classList.contains('AutoCompleteEntries--list-entry')) target = event.target.parentElement;
        target.classList.add('AutoCompleteEntries--list-entry__active');
    }

    highLightMatchingCharacters(string: string) {
        const pattern = new RegExp(this.props.searchString, 'gi');
        return {__html: string.replace(pattern, (match) => `<strong>${match}</strong>`)};
    }

    createLines(): React.ReactElement[] {
        if (!this.props.autoCompletionData || !this.props.autoCompletionData.length) return [];

        if (this.props.lastSearch) this.props.autoCompletionData.unshift({
            type: 'lastSearch',
            name: this.props.lastSearch,
            icon: 'clock'
        });

        return this.props.autoCompletionData.map((data, i) =>
            <li key={i} className='AutoCompleteEntries--list-entry' onMouseOver={this.handleMouseOver} data-index={i} data-type={data.type} data-name={data.name} onClick={this.handleClick}>
                <i className={`fas fa-${data.icon}`}>&nbsp;</i>
                <span dangerouslySetInnerHTML={this.highLightMatchingCharacters(data.name)}></span>
            </li>
        );
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
