const {
  adminLogin,
  adminSignup,
  adminAuthenticate,
  adminWithdrawal,
  adminTemporaryPassword,
  adminChangePassword,
} = require('../../../controllers/administrator/admin.auth.controller');
const { isUserLogin } = require('../../middlewares/auth/jwt.auth');
const {
  adminValidator,
  adminLoginValidator,
  adminIdValidator,
  adminPasswordValidator,
} = require('../../middlewares/validators/admins.validator');
const router = require('express').Router();

function adminAuthRouter({ APIRouter }) {
  APIRouter.use('/auth', router);


  /**
   * @description 관리자 이메일 인증
   * @route GET /admin/auth/authenticate
   * @request @queryString {adminId, password}
   */
  router.get('/authenticate', adminValidator, adminAuthenticate);

  /**
   * @description 관리자 회원가입
   * @route GET /admin/auth/signup
   * @request @queryString {adminId, password}
   */
  router.get('/signup', adminValidator, adminSignup);

  /**
   * @description 관리자 로그인
   * @route POST /admin/auth/login
   * @request @body {adminId, password}
   */
  router.post('/login', adminLoginValidator, adminLogin);

  /**
   * @description 관리자 탈퇴
   * @routes DELETE /admin/auth/withdrawal
   * @request @body {adminId,password}
   */
  router.delete(
    '/withdrawal',
    isUserLogin({ key: 'inu-clubs' }),
    adminWithdrawal,
  );

  /**
   * @description 관리자 비밀번호 임시발급
   * @routes GET /admin/auth/temporaryPassword
   * @request @queryString {adminId}
   */
  router.get('/temporaryPassword', adminIdValidator, adminTemporaryPassword);
  
  /**
   * @description 관리자 비밀번호 변경
   * @routes POST /admin/auth/changePassword
   * @request @body {adminId,password,newPassword}
   *          @token
   */
  router.post(
    '/changePassword',
    isUserLogin({ key: 'inu-clubs' }),
    adminPasswordValidator,
    adminChangePassword,
  );
}

module.exports = adminAuthRouter;
