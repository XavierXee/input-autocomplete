import {AutoCompletionEntry} from "../interfaces/AutoCompletionEntry";

class Mapper {

    private static getIconType(type: string) {
        switch(type) {
            case 'city':
                return 'map-marker-alt';
            case 'artist':
                return 'user';
            case 'no_items':
                return 'sad-tear';
            default:
                return 'music';
        }
    }

    public static mapApiResponse(apiResponse:any): AutoCompletionEntry[] {
        if(!apiResponse || !apiResponse.data || !apiResponse.data.results) throw new Error('Error : Bad Response Object');
        return apiResponse.data.results.map((result: any) => {
            return {
                type: result._type,
                name: result.name,
                icon: this.getIconType(result._type)
            }
        });
    }

}

export default Mapper;
