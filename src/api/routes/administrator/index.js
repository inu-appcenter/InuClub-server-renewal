const adminAuthRouter = require('./admin.auth.router');

function adminRouter(router) {
  adminAuthRouter(router);
  return router;
}

module.exports = adminRouter;
