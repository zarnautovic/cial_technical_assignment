const { ErrorHandler } = require('../helpers/error');

const validateSearchParam = (searchParam) => {
    if (!searchParam) {
        throw new ErrorHandler(400, 'Missing searchParam query param');
    }
};

module.exports = {
    validateSearchParam
};