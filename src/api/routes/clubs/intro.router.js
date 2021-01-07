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
   * @description 동아리 소개 상세 정보 조회
   * @route GET /clubs/intro/:clubId
   */
  router.get('/:clubId', clubIdValidator,getClub);

  /**
   * @description 동아리 소개 등록
   * @route POST /clubs/intro/
   * @request @body { name, category, content, phone, site, url, masterName }
   *          @body { src}
   */
  router.post('/',uploadImg.array('userfile',5),addClubValidator,addClub);

  /**
   * @description 동아리 소개 수정
   * @route PUT /clubs/intro/:clubId
   * @request @body { name?, master?, phone?, local?, personnel?, application?, content? }
   *
   */
  router.put('/:clubId',uploadImg.array('userfile',5),clubIdValidator, modifyClub);

  /**
   * @description 동아리 소개 삭제
   * @route DELETE /clubs/intro/:clubId
   */
  router.delete('/:clubId',clubIdValidator,removeClub);

}

module.exports = introRouter;
