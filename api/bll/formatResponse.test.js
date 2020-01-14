const fs = require('fs');
const path = require('path');
const { getTitleFromResult, formatResultObject, formatReponse } = require('./formatResponse');

describe('Get title from duck duck go result', () => {
    const result = '"<a href=\"https://duckduckgo.com/X\">X</a> The 24th and 2nd from last letter in the modern English alphabet and the ISO basic Latin..."';
    it('Testing to see if functionn return X as a title', () => {
        expect(getTitleFromResult(result)).toBe('X');
    });
});

describe('Get title and url from duck duck go object', () => {
    const resultObject = {
		Result: "<a href=\"https://duckduckgo.com/X\">X</a> The 24th and 2nd from last letter in the modern English alphabet and the ISO basic Latin...",
		FirstURL: "https://duckduckgo.com/X",
		Text: "X The 24th and 2nd from last letter in the modern English alphabet and the ISO basic Latin...",
		Icon: {
			Height: "",
			Width: "",
			URL: "https://duckduckgo.com/i/ca95663d.png"
		}
    };
    const formatedResultObject = {
        title: 'X',
        url: "https://duckduckgo.com/X"
    }
    it('Testing to see if function return object with title and url', () => {
        expect(formatResultObject(resultObject)).toEqual(formatedResultObject);
    });
});

describe('Format duck duck go recieved data into title - url array of objects', () => {
    const duckduckgoResult =  JSON.parse(fs.readFileSync(path.resolve(__dirname, "../testData/duckduckgoResultData.json"), 'utf8'));
    
    const wantedResult = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../testData/wantedResult.json"), 'utf8'));

    it('Testing to see if function return object with title and url', () => {
        expect(formatReponse(duckduckgoResult)).toEqual(wantedResult);
    });
});
