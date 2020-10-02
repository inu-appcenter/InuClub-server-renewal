const adminRouter = require('./administrator');
const clubsRouter = require('./clubs');
const usersRouter = require('./users');
const votesRouter = require('./votes');

function routers({ app }) {
  app.get('/', (req, res) => {
    res.send('test');
  });
  app.use('/users', usersRouter({ router: require('express').Router() }));
  app.use('/clubs', clubsRouter({ router: require('express').Router() }));
  app.use('/admin', adminRouter({ router: require('express').Router() }));
  app.use('/votes', votesRouter({ router: require('express').Router() }));
}

module.exports = routers;
