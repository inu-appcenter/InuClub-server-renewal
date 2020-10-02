const usersAuthRouter = require('./users.auth.router');
const profileRouter = require('./profile.router');

function usersRouter({ router }) {
  usersAuthRouter({ router });
  profileRouter({ router });

  return router;
}

module.exports = usersRouter;
