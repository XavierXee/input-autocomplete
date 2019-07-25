import React from 'react';
import './Error.scss';

import { ErrorProps } from "../../interfaces/ErrorProps";

class Error extends React.Component<ErrorProps> {
    render() {
        if(!this.props.errorMessage) return '';

        return(
            <div className='Error'>{this.props.errorMessage}</div>
        )
    }
}

export default Error;