//각종 middleware,validator,controller를 불러올자리
const isLoggedIn = require('../../middlewares/auth.middleware');
const administratorIsLoggedIn = require('../../middlewares/administrator.auth.middleware');
const {
  getClubIntro,
  postClubIntro,
  modifyClubIntro,
  deleteClubIntro,
  getCategoryClub,
  getNameClub,
} = require('../../controllers/club.controller');
const router = require('express').Router();

/**
 * @description 동아리 소개 불러오기
 * @route GET /clubIntro/:id
 */
router.get('/:id', isLoggedIn, getClubIntro);

/**
 * @description 동아리 소개 등록하기
 * @route POST /clubIntro/
 */
router.post('/', administratorIsLoggedIn, postClubIntro);

/**
 * @description 동아리 소개 수정하기
 * @route PATCH /clubIntro/:id
 */
router.patch('/:id', administratorIsLoggedIn, modifyClubIntro);

/**
 * @description 동아리 소개 삭제하기
 * @route DELETE /clubIntro/:id
 */
router.delete('/:id', administratorIsLoggedIn, deleteClubIntro);

/**
 * @description 카테고리별로 동아리 리스트 불러오기
 * @route GET /clubIntro/category/{category}
 */
router.get('/category', isLoggedIn, getCategoryClub);

/**
 * @description 검색바에서 동아리 리스트 불러오기
 * @route GET /clubIntro/clubName/{clubName}
 */
router.get('/clubName', isLoggedIn, getNameClub);

module.exports = router;
