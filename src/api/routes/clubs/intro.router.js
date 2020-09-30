// //각종 middleware,validator,controller를 불러올자리
// const isLoggedIn = require('../../middlewares/auth.middleware');
// const administratorIsLoggedIn = require('../../middlewares/administrator.auth.middleware');
// const {
//   getClubIntro,
//   postClubIntro,
//   modifyClubIntro,
//   deleteClubIntro,
//   getCategoryClub,
//   getNameClub,
// } = require('../../controllers/club.controller');
// const router = require('express').Router();

function introRouter(router) {
  /**
   * @description 동아리 소개 불러오기
   * @route GET /clubs/intro/:id
   */
  router.get('/intro/:id', isLoggedIn, getClubIntro);

  /**
   * @description 동아리 소개 등록하기
   * @route POST /clubs/intro/
   */
  router.post('/intro', administratorIsLoggedIn, postClubIntro);

  /**
   * @description 동아리 소개 수정하기
   * @route PATCH /clubs/intro/:id
   */
  router.patch('/intro/:id', administratorIsLoggedIn, modifyClubIntro);

  /**
   * @description 동아리 소개 삭제하기
   * @route DELETE /clubs/intro/:id
   */
  router.delete('/intro/:id', administratorIsLoggedIn, deleteClubIntro);

  /**
   * @description 카테고리별로 동아리 리스트 불러오기
   * @route GET /clubs/intro/category/:id
   */
  router.get('/intro/category/:id', isLoggedIn, getCategoryClub);

  /**
   * @description 검색바에서 동아리 리스트 불러오기
   * @route GET /clubs/intro/search
   * @queryString {clubName}
   */
  router.get('/intro/search', isLoggedIn, getNameClub);
}

module.exports = introRouter;
