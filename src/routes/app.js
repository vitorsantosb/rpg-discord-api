const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

//Controllers

app.use(cors({
  origin: ['*'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization'],
}));

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({
  extended: true,
  limit: '100mb',
  parameterLimit: 250000,
}));

app.use(bodyParser.json());


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', ['https://mevi-frontend-git-development-itsolutions.vercel.app', 'http://mevi-frontend.vercel.app', 'http://localhost:3001', 'http://localhost:3000', '*']);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    return res.status(200).send({});
  }
  next();
});

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  return res.send({
    error: {
      message: error.message
    }
  });
});

module.exports = app;