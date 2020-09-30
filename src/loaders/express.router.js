function loadExpressRouter(app) {
  app.use('/clubIntro', require('../api/routes/club/clubIntro'));
}
module.exports = loadExpressRouter;
