//import * as Axios from 'axios/index';
import Axios , {AxiosResponse, AxiosError} from 'axios';
import {Component} from "react";


const baseUrl = process.env.REACT_APP_API_BASE_URL;

//class Api extends Component {

export default {
    getAutocompletion: () => {
        return Axios.get(`${baseUrl}/radar/data`);
    }
}