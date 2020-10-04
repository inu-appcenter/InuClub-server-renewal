const express = require('express');
const errorHandler = require('./utils/error.handler.util');
const routers = require('./api/routes');
const loaders = require('./loaders');

async function server() {
  const app = express();

  // load application middleware
  await loaders({ app });

  // register routers
  routers({ app });

  // error handler
  errorHandler({ app });

  // port binding
  app.listen(9000, () => {
    console.log('server start!!');
  });
}

server();
