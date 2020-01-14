const fs = require('fs');
const path = require('path');
const { getSearchResults, buildUrl } = require('./duckduckgo');

describe('Testing build url helper function', () => {
    const searchParam = 'test';
    const resultUrl = 'http://api.duckduckgo.com/?q=test&format=json'
    it('Testing to see if buildIrl function returns correct url', () => {
        expect(buildUrl(searchParam)).toBe(resultUrl);
    });
});

describe('Testing call to duckduckgo api', () => {
    const searchParam = 'google';
    const duckduckgoResult =  JSON.parse(fs.readFileSync(path.resolve(__dirname, "../../testData/duckduckgoResultData.json"), 'utf8'));
    it('Async testing to see if our fuction returns results from duckduckgo', async done => {
        expect(await getSearchResults(searchParam)).toEqual(duckduckgoResult);
        done();
    })
});