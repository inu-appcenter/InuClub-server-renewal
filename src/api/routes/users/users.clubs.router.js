const {
  getClubs,
} = require('../../../controllers/users/users.clubs.controller');
const { isUserLogin } = require('../../middlewares/auth/jwt.auth');
const router = require('express').Router();

function usersClubsRouter({ APIRouter }) {
  APIRouter.use('/clubs', router);
  router.use(isUserLogin({ key: 'inu-auth' }));

  /**
   * @description 가입한 동아리들 조회
   * @routes GET /users/clubs
   */
  router.get('/', getClubs);
}

module.exports = usersClubsRouter;
