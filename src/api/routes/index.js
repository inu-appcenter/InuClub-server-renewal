const adminRouter = require('./administrator');
const clubsRouter = require('./clubs');
const usersRouter = require('./users');

function routers(app) {
  const router = require('express').Router();
  app.use('/users', usersRouter(router));
  app.use('/clubs', clubsRouter(router));
  app.use('/admin', adminRouter(router));
}

module.exports = routers;
