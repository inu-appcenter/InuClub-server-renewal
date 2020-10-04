const {
  adminLogin,
  adminSignup,
} = require('../../../controllers/administrator/admin.controller');
const router = require('express').Router();

function adminAuthRouter({ APIRouter }) {
  APIRouter.use('/auth', router);

  /**
   * @description 관리자 로그인
   * @route POST /admin/auth/login
   * @request @body {email, password}
   */
  router.post('/login', adminLogin);
}

module.exports = adminAuthRouter;
