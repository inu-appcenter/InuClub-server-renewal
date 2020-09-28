const express = require('express');
const loaders = require('./loaders');

function server() {
  const app = express();

  // * load application middleware
  loaders(app);

  // * port binding
  app.listen(9000, () => {
    console.log('server start');
  });
}

server();
