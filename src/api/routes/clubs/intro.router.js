const {
  getClub,
  addClub,
  modifyClub,
  removeClub,
  getClubsByCategory,
  searchClub,
} = require('../../../controllers/clubs/intro.controller');
const { isUserLogin } = require('../../middlewares/auth/jwt.auth');
const{ uploadImg } = require('../../middlewares/multer/clubs.intro.multer');
const { addClubValidator, clubIdValidator } = require('../../middlewares/validators/clubs.validator')
const router = require('express').Router();

function introRouter({ APIRouter }) {
  APIRouter.use('/intro', router);
  router.use(isUserLogin({key: 'inu-clubs'}));

  /**
   * @description 검색바에서 동아리 리스트 불러오기
   * @route GET /clubs/intro/search
   * @queryString {clubName}
   */
  router.get('/search', searchClub);

  /**
   * @description 동아리 소개 조회
   * @route GET /clubs/intro/:clubId
   */
  router.get('/:clubId', getClub);

  /**
   * @description 동아리 소개 등록하기
   * @route POST /clubs/intro/
   * @request @body { name, category, content, phone, site, url, masterName }
   *          @body { src}
   */
  router.post('/',uploadImg.array('userfile',5),addClubValidator,addClub);

  /**
   * @description 동아리 소개 수정하기
   * @route PUT /clubs/intro/:clubId
   * @request @body { name?, master?, phone?, local?, personnel?, application?, content? }
   *
   */
  router.put('/:clubId',uploadImg.array('userfile',5),clubIdValidator, modifyClub);

  /**
   * @description 동아리 소개 삭제하기
   * @route DELETE /clubs/intro/:clubId
   */
  router.delete('/:clubId',clubIdValidator,removeClub);

  /**
   * @description 카테고리별로 동아리 리스트 불러오기
   * @route GET /clubs/intro/category/:categoryNum
   */
  router.get('/category/:categoryNum', getClubsByCategory);
}

module.exports = introRouter;
