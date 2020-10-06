const {
  modifyProfile,
  getProfile,
} = require('../../../controllers/users/profile.controller');
const { isUserLogin } = require('../../middlewares/auth/jwt.auth');
const router = require('express').Router();

function profileRouter({ APIRouter }) {
  APIRouter.use('/profile', router);
  router.use(isUserLogin({ key: 'inu-auth' }));

  /**
   * @description 프로필 조회
   * @routes GET /user/profile
   */
  router.get('/', getProfile);

  /**
   * @description 프로필 수정
   * @routes PATCH /users/profile
   */
  router.patch('/', modifyProfile);
}

module.exports = profileRouter;
