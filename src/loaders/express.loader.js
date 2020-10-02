const express = require('express');
const morgan = require('morgan');
const hpp = require('hpp');
const helmet = require('helmet');
const cors = require('cors');

function loadExpressMiddleware({ app }) {
  console.log('loadExpressMiddleware start');

  app.use(helmet());
  app.use(morgan('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(hpp());
  app.use(cors());

  console.log('loadExpressMiddleware finish');
}

module.exports = loadExpressMiddleware;
