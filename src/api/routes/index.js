const adminRouter = require('./administrator');
const clubsRouter = require('./clubs');
const usersRouter = require('./users');
const votesRouter = require('./votes');
const APIRouter = require('express').Router();

function routers({ app }) {
  usersRouter({ APIRouter });
  clubsRouter({ APIRouter });
  adminRouter({ APIRouter });
  votesRouter({ APIRouter });

  app.use('/', APIRouter);
}

module.exports = routers;
