import React from 'react';
import api from './../../utils/api';

import {SearchBarProps} from "../../interfaces/SearchBarProps";

import AutoCompleteInput from "./../AutoCompleteInput/AutoCompleteInput";
import AutoCompleteSubmit from "./../AutoCompleteSubmit/AutoCompleteSubmit";
import AutoCompleteEntries from "./../AutoCompleteEntries/AutoCompleteEntries";
import Error from "./../Error/Error";

import './SearchBar.scss';

class SearchBar extends React.Component<{}, SearchBarProps> {
    constructor(props: any) {
        super(props);
        this.state = {
            searchString: '',
            errorMessage: '',
            lastSearch: '',
            autoCompletionData: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    // TODO: type event
    handleChange(value: any): void {
        this.setState({searchString: value, errorMessage: ''});
        if (value) {
            api.getAutoCompletion(value)
                .then((result) => {
                    this.setState({autoCompletionData: result});
                    console.log(this.state);
                })
                .catch((error) => {
                    this.setState({
                        searchString: '',
                        errorMessage: error,
                        autoCompletionData: []
                    });
                })
        } else {
            this.setState({autoCompletionData: []});
        }
    }

    handleSubmit(): void {
        this.setState({
            lastSearch: this.state.searchString,
            autoCompletionData: []
        })
    }

    handleBlur(): void {
        this.setState({
            searchString: '',
            errorMessage: '',
            autoCompletionData: []
        });
    }

    handleClick(clickedEntryName: string): void {
        this.setState({
            searchString: clickedEntryName || '',
            lastSearch: clickedEntryName || '',
            autoCompletionData: []
        })
    }

    render() {
        return (
            <div className="SearchBar">
                <form className="SearchBar--form">
                    <AutoCompleteInput searchString={this.state.searchString} onBlur={this.handleBlur} onChange={this.handleChange}/>
                    <AutoCompleteSubmit onSubmit={this.handleSubmit}/>
                    <AutoCompleteEntries autoCompletionData={this.state.autoCompletionData} lastSearch={this.state.lastSearch} onClick={this.handleClick}/>
                    <Error errorMessage={this.state.errorMessage}/>
                </form>
            </div>
        );
    }
}

export default SearchBar;
