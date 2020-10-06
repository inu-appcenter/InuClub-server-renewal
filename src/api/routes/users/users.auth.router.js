const {
  userSignup,
  userLogin,
  userWithdrawal,
} = require('../../../controllers/users/users.auth.controller');
const { isUserLogin } = require('../../middlewares/auth/jwt.auth');
const {
  userLoginValidator,
  userSignupValidator,
} = require('../../middlewares/validators/users.validator');
const router = require('express').Router();

function usersAuthRouter({ APIRouter }) {
  APIRouter.use('/auth', router);
  /**
   * @description INU 통합 회원가입
   * @routes POST /users/auth/signup
   * @request @body {studentId, password, phone, major, name}
   */
  router.post('/signup', userSignupValidator, userSignup);

  /**
   * @description INU 통합 로그인(첫 로그인 시, 서비스 가입)
   * @routes POST /users/auth/login
   * @request @body {id, passwd}
   */
  router.post('/login', userLoginValidator, userLogin);

  /**
   * @description 서비스 회원 탈퇴
   * @routes DELETE /users/auth/withdrawal
   */
  router.delete(
    '/withdrawal',
    isUserLogin({ key: 'inu-auth' }),
    userWithdrawal,
  );
}

module.exports = usersAuthRouter;
