const usersAuthRouter = require('./users.auth.router');
const profileRouter = require('./profile.router');
const router = require('express').Router();

function usersRouter({ APIRouter }) {
  APIRouter.use('/users', router);
  usersAuthRouter({ APIRouter: router });
  profileRouter({ APIRouter: router });
}

module.exports = usersRouter;
