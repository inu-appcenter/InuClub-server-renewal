const usersAuthRouter = require('./users.auth.router');
const profileRouter = require('./profile.router');
const usersClubsRouter = require('./users.clubs.router');
const router = require('express').Router();

function usersRouter({ APIRouter }) {
  APIRouter.use('/users', router);
  usersAuthRouter({ APIRouter: router });
  profileRouter({ APIRouter: router });
  usersClubsRouter({ APIRouter: router });
}

module.exports = usersRouter;
