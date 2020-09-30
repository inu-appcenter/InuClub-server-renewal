const introRouter = require('./intro.router');

function clubsRouter(router) {
  introRouter(router);

  return router;
}

module.exports = clubsRouter;
