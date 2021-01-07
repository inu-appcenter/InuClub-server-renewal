const {
  getClubs,
  getClubsBySearch,
  getClubsByCategory,
} = require('../../../controllers/users/users.clubs.controller');
const { isUserLogin } = require('../../middlewares/auth/jwt.auth');
const router = require('express').Router();

function usersClubsRouter({ APIRouter }) {
  APIRouter.use('/clubs', router);
  //router.use(isUserLogin({ key: 'inu-auth' }));

  /**
   * @description 가입한 동아리들 조회
   * @routes GET /users/clubs
   */
  router.get('/', getClubs);


  /**
   * @description 검색바에서 검색결과 동아리들 조회
   * @route POST /users/clubs/search
   * @request @body {searchBar}
   */
  router.post('/search', getClubsBySearch);

  /**
   * @description 카테고리별로 동아리들 조회
   * @route GET /users/clubs/:categoryNum
   */
  router.get('/:categoryNum', getClubsByCategory);
}

module.exports = usersClubsRouter;
