const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const indexRouter = require('./routes/index');
const searchRouter = require('./routes/search');
const historyRouter = require('./routes/history');
const { handleError } = require('./helpers/error');

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', indexRouter);
app.use('/', searchRouter);
app.use('/', historyRouter);

app.use((err, req, res, next) => {
    handleError(err, res);
});

module.exports = app;