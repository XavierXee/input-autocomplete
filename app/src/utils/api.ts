//import * as Axios from 'axios/index';
import Axios , {AxiosResponse, AxiosError} from 'axios';
import {Component} from "react";


const baseUrl = process.env.REACT_APP_API_BASE_URL;

class Api  {

    public static getAutoCompletion(searchString: string): Promise<any[]> {
        return new Promise((resolve, reject) => {
            Axios.get(`${baseUrl}?query=${searchString}`)
                .then((response) => {
                    // TODO: map result
                    resolve(response.data.results);
                })
                .catch((error) => {
                    reject('Error fetching data');
                })
        });
    }

    /*
    getAutoCompletion: (searchString: string) => {
        return Axios.get(`${baseUrl}?query=${searchString}`);
    }
    */
}

export default Api;
