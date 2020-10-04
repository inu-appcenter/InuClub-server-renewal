const {
  modifyProfile,
  getProfile,
} = require('../../../controllers/users/profile.controller');
const router = require('express').Router();

function profileRouter({ APIRouter }) {
  APIRouter.use('/profile', router);

  /**
   * @description 프로필 수정
   * @routes PATCH /users/profile
   */
  router.patch('/', modifyProfile);

  /**
   * @description 프로필 조회
   * @routes GET /user/profile
   */
  router.get('/', getProfile);
}

module.exports = profileRouter;
