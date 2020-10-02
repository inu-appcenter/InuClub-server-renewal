const adminAuthRouter = require('./admin.auth.router');

function adminRouter({ router }) {
  router.use('/auth', adminAuthRouter());
  return router;
}

module.exports = adminRouter;
