const express = require('express');
const morgan = require('morgan');
const hpp = require('hpp');
const helmet = require('helmet');
const cors = require('cors');
const path = require('path')

function loadExpressMiddleware({ app }) {
  console.log('loadExpressMiddleware start');
  try {
    app.use(helmet());
    app.use(morgan('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.static(path.join('intro_image')));
    app.use(hpp());
    app.use(cors());
  } catch (e) {
    console.error(e);
    throw new Error('loadExpressMiddleware error');
  }
  console.log('loadExpressMiddleware finish');
}

module.exports = loadExpressMiddleware;
;