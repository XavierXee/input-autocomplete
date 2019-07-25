import React from 'react';
import api from './../../utils/api';

import {AutoCompletionEntry} from "../../interfaces/AutoCompletionEntry";

import AutoCompleteInput from "./../AutoCompleteInput/AutoCompleteInput";
import AutoCompleteSubmit from "./../AutoCompleteSubmit/AutoCompleteSubmit";
import AutoCompleteEntries from "./../AutoCompleteEntries/AutoCompleteEntries";

import './SearchBar.scss';
import {AutoCompleteEntriesProps} from "../../interfaces/AutoCompleteEntriesProps";

class SearchBar extends React.Component<{}, { searchString: string, errorMessage: string, autoCompletionData: any[]}> {
// class SearchBar extends React.Component<{}, { searchString: string, errorMessage: string, autoCompletionData: AutoCompletionEntry[]}> {
    constructor(props: any) {
        super(props);
        this.state = {
            searchString: '',
            errorMessage: '',
            autoCompletionData: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    // TODO: type event
    handleChange(value: any): void {
        this.setState({searchString: value});
        if (value) {
            api.getAutoCompletion(value)
                .then((result) => {
                    this.setState({autoCompletionData: result});
                    console.log(this.state);
                })
                .catch(() => {

                })
        } else {
            this.setState({autoCompletionData: []});
        }
    }

    handleSubmit(): void {
        alert('Le nom a été soumis : ' + this.state.searchString);
    }

    handleBlur(): void {
        this.setState({
            searchString: '',
            autoCompletionData: []
        });
    }

    render() {
        return (
            <div className="SearchBar">
                <form className="SearchBar--form">
                    <AutoCompleteInput searchString={this.state.searchString} onBlur={this.handleBlur} onChange={this.handleChange}/>
                    <AutoCompleteSubmit onSubmit={this.handleSubmit}/>
                    <AutoCompleteEntries autoCompletionData={this.state.autoCompletionData}/>
                </form>
            </div>
        );
    }
}

export default SearchBar;
