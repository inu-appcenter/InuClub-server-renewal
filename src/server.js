const express = require('express');
const routers = require('./api/routes');
const loaders = require('./loaders');

function server() {
  const app = express();

  // * load application middleware
  loaders(app);

  // * register routers
  routers(app);

  // * port binding
  app.listen(9000, () => {
    console.log('server start!!');
  });
}

server();
