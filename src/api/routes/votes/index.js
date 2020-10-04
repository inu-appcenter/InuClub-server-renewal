const commentsRouter = require('./comments.router');
const defaultRouter = require('./default.router');
const router = require('express').Router();

function votesRouter({ APIRouter }) {
  APIRouter.use('/votes', router);
  defaultRouter({ APIRouter: router });
  commentsRouter({ APIRouter: router });
}

module.exports = votesRouter;
