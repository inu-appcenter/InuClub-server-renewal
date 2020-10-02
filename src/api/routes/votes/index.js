const commentsRouter = require('./comments.router');
const rootRouter = require('./votes.router');

function votesRouter({ router }) {
  router.use('/', rootRouter());
  router.use('/comments', commentsRouter());
  return router;
}

module.exports = votesRouter;
