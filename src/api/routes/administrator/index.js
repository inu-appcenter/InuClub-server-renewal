const adminAuthRouter = require('./admin.auth.router');
const router = require('express').Router();

function adminRouter({ APIRouter }) {
  APIRouter.use('/admin', router);
  adminAuthRouter({ APIRouter: router });
}

module.exports = adminRouter;
