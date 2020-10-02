const {
  modifyProfile,
  getProfile,
} = require('../../../controllers/users/profile.controller');

const router = require('express').Router();

function profileRouter() {
  // router.use(isLogin);
  /**
   * @description 프로필 수정
   * @routes PATCH /users/profile
   */
  router.patch('/profile', modifyProfile);

  /**
   * @description 프로필 조회
   * @routes GET /user/profile
   */
  router.get('/profile', getProfile);

  return router;
}

module.exports = profileRouter;
