const introRouter = require('./intro.router');
const eventRouter = require('./events.router');

function clubsRouter({ router }) {
  router.use('/intro', introRouter());
  router.use('/events', eventRouter());
  return router;
}

module.exports = clubsRouter;
