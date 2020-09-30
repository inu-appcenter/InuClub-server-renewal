function loadExpressMiddleware(app) {
  console.log('loadExpressMiddleware start');

  const express = require('express');
  const distEnv = process.env.NODE_ENV || 'development';
  app.use(require('morgan')(distEnv === 'development' ? 'dev' : 'common'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
}

module.exports = loadExpressMiddleware;
