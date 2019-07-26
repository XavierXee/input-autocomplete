import Axios from 'axios';
import Mapper from './mapper';

import {AutoCompletionEntry} from "../interfaces/AutoCompletionEntry";

const baseUrl = process.env.REACT_APP_API_BASE_URL;

class Api {
    public static getAutoCompletion(searchString: string): Promise<AutoCompletionEntry[]> {
        return new Promise((resolve, reject) => {
            Axios.get(`${baseUrl}?query=${searchString}`)
                .then((response) => {

                    console.log(response.data.results);

                    try {
                        const mappedResponse = Mapper.mapApiResponse(response);
                        resolve(mappedResponse);
                    } catch (error) {
                        reject(`Response Error : ${error}`);
                    }
                })
                .catch((error) => {
                    reject('Error fetching data');
                })
        });
    }
}

export default Api;
