const express = require('express');
const morgan = require('morgan');

function loadExpressMiddleware({ app }) {
  console.log('loadExpressMiddleware start');

  app.use(morgan('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  console.log('loadExpressMiddleware finish');
}

module.exports = loadExpressMiddleware;
