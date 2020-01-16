const fs = require('fs');
const path = require('path');
const { promisify } = require('util')

const readFileAsync = promisify(fs.readFile)
const writeFileAsync = promisify(fs.writeFile)

const saveToFile = async (searchParam) => {
    try {
        const data = await readFileAsync(path.resolve(__dirname, "../History.json"), 'utf-8');
        const database = JSON.parse(data);
            if (database.searchHistory.indexOf(searchParam) === -1) {
                database.searchHistory.push(searchParam);
                const json = JSON.stringify(database);
                await writeFileAsync(path.resolve(__dirname, "../History.json"), json, 'utf-8');
            }
        
    } catch (error) {
        if (error.code === 'ENOENT') {
            const json = JSON.stringify({searchHistory: [searchParam]});
            await writeFileAsync(path.resolve(__dirname, "../History.json"), json, 'utf-8');
        } else {
            return error;
        }
    }
};

const getFromFile = async () => {
    try {
        const history = await readFileAsync(path.resolve(__dirname, "../History.json"), 'utf-8');
        return JSON.parse(history);
    } catch (error) {
        if (error.code === 'ENOENT') {
            return {
                searchHistory: []
            };
        }
        return error;
    }
};

module.exports = {
    saveToFile,
    getFromFile
};