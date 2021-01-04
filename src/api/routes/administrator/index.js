const adminAuthRouter = require('./admin.auth.router');
const adminUserRouter = require('./admin.user.router');
const router = require('express').Router();

function adminRouter({ APIRouter }) {
  APIRouter.use('/admin', router);
  adminAuthRouter({ APIRouter: router });
  adminUserRouter({ APIRouter: router});
}

module.exports = adminRouter;
