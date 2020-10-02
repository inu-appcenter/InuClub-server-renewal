const usersAuthRouter = require('./users.auth.router');
const profileRouter = require('./profile.router');

function usersRouter({ router }) {
  router.use('/auth', usersAuthRouter());
  router.use('profile', profileRouter());

  return router;
}

module.exports = usersRouter;
