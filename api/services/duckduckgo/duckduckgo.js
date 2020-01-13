const axios = require('axios');

const url = 'http://api.duckduckgo.com/';
const format = 'json';

const buildUrl = (searchParam) => {
  const url2 = `${url}/?q=${searchParam}&format=${format}`;
  return url2;
};

const getSearchResults = async (searchParam) => {
  try {
    const searchUrl = buildUrl(searchParam);
    const searchResult = await axios.get(searchUrl);
    return searchResult.data.RelatedTopics;
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = {
  getSearchResults
};