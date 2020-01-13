const express = require('express');
const helmet = require('helmet');

const indexRouter = require('./routes/index');
const searchRouter = require('./routes/search');

const app = express();
const port = process.env.PORT || 3000;

app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', indexRouter);
app.use('/', searchRouter);

app.listen(port);
console.log('The server is listening on port 3000');