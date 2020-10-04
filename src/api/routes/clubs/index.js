const introRouter = require('./intro.router');
const eventRouter = require('./events.router');
const router = require('express').Router();

function clubsRouter({ APIRouter }) {
  APIRouter.use('/clubs', router);
  introRouter({ APIRouter: router });
  eventRouter({ APIRouter: router });
}

module.exports = clubsRouter;
