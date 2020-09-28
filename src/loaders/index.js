const loadExpressMiddleware = require('./express.middleware');

function loaders(app) {
  console.log('loaders start');
  loadExpressMiddleware(app);
}

module.exports = loaders;
