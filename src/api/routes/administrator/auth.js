//각종 middleware,validator,controller를 불러올자리
const isLoggedIn = require('../../middlewares/auth.middleware');
const AdministratorController = require('../../../controllers/administrator/administrator.controller');
const router = require('express').Router();

/**
 * @description 관리자 로그인
 * @route post /auth/login
 */
router.post('/login', AdministratorController.createToken);

module.exports = router;
