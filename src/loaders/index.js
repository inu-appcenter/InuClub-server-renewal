const loadExpressMiddleware = require('./express.loader');
const loadSequelize = require('./sequelize.loader');

async function loaders({ app }) {
  console.log('loaders start');

  // application level middleware
  loadExpressMiddleware({ app });

  // sequelize sync
  await loadSequelize();

  console.log('loaders finish');
}

module.exports = loaders;
