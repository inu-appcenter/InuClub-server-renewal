const {
  adminLogin,
  adminSignup,
} = require('../../../controllers/administrator/admin.controller');

const router = require('express').Router();

function adminAuthRouter() {
  router.get('/', (req, res) => {
    res.send('auth test');
  });
  /**
   * @description 관리자 로그인
   * @route POST /admin/auth/login
   * @request @body {email, password}
   */
  router.post('/login', adminLogin);

  return router;
}

module.exports = adminAuthRouter;
