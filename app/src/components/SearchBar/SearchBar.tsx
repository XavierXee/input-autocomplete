import React from 'react';
import api from './../../utils/api';

import {SearchBarProps} from '../../interfaces/SearchBarProps';

import AutoCompleteInput from './../AutoCompleteInput/AutoCompleteInput';
import AutoCompleteSubmit from './../AutoCompleteSubmit/AutoCompleteSubmit';
import AutoCompleteEntries from './../AutoCompleteEntries/AutoCompleteEntries';
import Error from './../Error/Error';

import './SearchBar.scss';

class SearchBar extends React.Component<{}, SearchBarProps> {
    constructor(props: any) {
        super(props);
        this.state = {
            searchString: '',
            errorMessage: '',
            lastSearch: '',
            autoCompletionData: [],
            currentHighLightedEntry: null,
            hideAutoCompletionData: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    componentDidMount(){
        document.addEventListener('keydown', this.handleKeyPress, false);
    }

    componentWillUnmount(){
        document.removeEventListener('keydown', this.handleKeyPress, false);
    }

    handleChange(value: string): void {
        this.setState({searchString: value, errorMessage: ''});
        if (value) {
            api.getAutoCompletion(value)
                .then((result) => {
                    this.setState({autoCompletionData: result});
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
        setTimeout(() => {
            this.setState({
                autoCompletionData: []
            });
        }, 100);
    }

    handleKeyPress(event: any): void {
        const key = (event.key || event.code) || event.keyCode;
        const allowedKey = [40, 38, 'ArrowDown', 'ArrowUp'];
        if (!!~allowedKey.indexOf(key)) {

            let index = 0;
            if (document.querySelector('.AutoCompleteEntries--list-entry__active')) {
                // @ts-ignore
                index = Number(document.querySelector('.AutoCompleteEntries--list-entry__active').getAttribute('data-index'));
                if (allowedKey[allowedKey.indexOf(key)] === 'ArrowUp' || allowedKey[allowedKey.indexOf(key)] === 38) {
                    index = index === 0 ? document.querySelectorAll('.AutoCompleteEntries--list-entry').length - 1 : index - 1;
                } else {
                    index = index === document.querySelectorAll('.AutoCompleteEntries--list-entry').length - 1 ? 0 : index + 1;
                }
            }

            document.querySelectorAll('.AutoCompleteEntries--list-entry').forEach((entry) => {
                entry.classList.remove('AutoCompleteEntries--list-entry__active');
            });

            document.querySelectorAll('.AutoCompleteEntries--list-entry')[index].classList.add('AutoCompleteEntries--list-entry__active');

        }
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
                    <AutoCompleteEntries autoCompletionData={this.state.autoCompletionData} searchString={this.state.searchString} lastSearch={this.state.lastSearch} onClick={this.handleClick}/>
                    <Error errorMessage={this.state.errorMessage}/>
                </form>
            </div>
        );
    }
}

export default SearchBar;
