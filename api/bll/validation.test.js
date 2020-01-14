const { validateSearchParam } = require('./validation');
const { ErrorHandler } = require('../helpers/error');

describe('search params validation testing', () => {
    const searchParam = '';
    it('Testing to see if validate search param throwing error on empty search param', () => {
        expect(() => validateSearchParam(searchParam)).toThrow(ErrorHandler);
    });
});
