const loadExpressMiddleware = require('./middleware.loader');

function loaders(app) {
  console.log('loaders start');

  // * application level middleware
  loadExpressMiddleware(app);
}

module.exports = loaders;
