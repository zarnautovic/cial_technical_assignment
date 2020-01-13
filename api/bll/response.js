
const HTMLParser = require('node-html-parser');

const getTitleFromResult = (html) => {
    const root = HTMLParser.parse(html);
    return root.querySelector('a').rawText;
}

const formatResultObject = (resultObject) => {
    return {
        url: resultObject.FirstURL,
        title: getTitleFromResult(resultObject.Result)
    };
};

const getResponse = (json) => {
    const response = json.reduce((accumulator, currentObject) => {
        if (currentObject.Topics) {
            const formatedTopicsObject = currentObject.Topics.map(x => formatResultObject(x));
            return [...accumulator, ...formatedTopicsObject];
        }
        const formatedObject = formatResultObject(currentObject);
        return [...accumulator, formatedObject];
    }, []);
    return response;
};

module.exports = {
    getResponse
};