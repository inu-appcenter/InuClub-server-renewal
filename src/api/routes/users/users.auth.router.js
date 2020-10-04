const {
  userSignup,
  userLogin,
  userWithdrawal,
} = require('../../../controllers/users/users.auth.controller');
const router = require('express').Router();

function usersAuthRouter({ APIRouter }) {
  APIRouter.use('/auth', router);
  /**
   * @description INU 통합 회원가입
   * @routes POST /users/auth/signup
   * @request @body {id, passwd, tel, major, name}
   */
  router.post('/signup', userSignup);

  /**
   * @description INU 통합 로그인(첫 로그인 시, 서비스 가입)
   * @routes POST /users/auth/login
   * @request @body {id, passwd}
   */
  router.post('/login', userLogin);

  /**
   * @description 서비스 회원 탈퇴
   * @routes DELETE /users/auth/withdrawal
   */
  router.delete('/withdrawal', userWithdrawal);
}

module.exports = usersAuthRouter;
