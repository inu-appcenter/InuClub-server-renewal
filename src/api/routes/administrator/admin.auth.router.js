const {
  adminLogin,
  adminSignup,
  adminAuthenticate,
} = require('../../../controllers/administrator/admin.auth.controller');
const router = require('express').Router();

function adminAuthRouter({ APIRouter }) {
  APIRouter.use('/auth', router);
  /**
   * @description 관리자 이메일 인증
   * @route GET /admin/auth/authenticate
   * @request @queryString {adminId, password}
   */
  router.get('/authenticate', adminAuthenticate);
  /**
   * @description 관리자 로그인
   * @route POST /admin/auth/login
   * @request @body {email, password}
   */
  router.post('/login', adminLogin);

  /**
   * @description 관리자 회원가입
   * @route GET /admin/auth/signup
   * @request @queryString {adminId, password}
   */
  router.get('/signup', adminSignup);
}

module.exports = adminAuthRouter;
