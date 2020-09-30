const {
  adminLogin,
  adminSignup,
} = require('../../../controllers/administrator/admin.controller');
const {
  adminLoginValid,
  adminSignupValid,
} = require('../../middlewares/admin.middleware');

function adminAuthRouter(router) {
  /**
   * @description 관리자 로그인
   * @route POST /admin/auth/login
   * @request @body {email, password}
   */
  router.post('/auth/login', adminLoginValid, adminLogin);

  /**
   * @description 관리자 회원가입
   * @route POST /admin/auth/signup
   * @request @body {email, name, password, clubId}
   */
  router.post('/auth/signup', adminSignupValid, adminSignup);
}

module.exports = adminAuthRouter;
