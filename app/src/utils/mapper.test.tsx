import Mapper from './mapper';

const mockResponse = {
    data: {
        results: [
            {
                _type: 'type-test',
                name: 'name-test'
            },
            {
                _type: 'artist',
                name: 'name-test'
            }
        ]
    }
};

const mockBadResponse = { data: {} };

describe('map response properly', () => {
    const expected = [
        {
            type: 'type-test',
            name: 'name-test',
            icon: 'music',
        },
        {
            type: 'artist',
            name: 'name-test',
            icon: 'user',
        },
    ];
    test('should be a two entries array matching the expected properties', () => {
        expect(Mapper.mapApiResponse(mockResponse)).toEqual(expect.arrayContaining(expected));
    });
});


describe('throw an error', () => {
    test('should throw an error as data property in response is empty', () => {
        try {
            Mapper.mapApiResponse(mockBadResponse)
        } catch (e) {
            expect(e).toBe('Error : Bad Response Object');
        }
    });
});


