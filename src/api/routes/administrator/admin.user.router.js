const {
    addAdminUser,
    removeAdminUser,
    getAdminUsers,
    searchAdminUser,
} = require('../../../controllers/administrator/admin.user.controller');
const { isUserLogin } = require('../../middlewares/auth/jwt.auth');
const { adminUserValidator} = require('../../middlewares/validators/admins.validator');
const router = require('express').Router();

function adminUserRouter({APIRouter}) {
    APIRouter.use('/user',router);
    router.use(isUserLogin({key:'inu-clubs'}))
    /**
     * @description 관리자 동아리원 목록 가져오기
     * @route get /admin/user/list
     * @request @token
     */
    router.get('/list',getAdminUsers);
    /**
     * @description 관리자 동아리원 등록
     * @routes POST /admin/user/
     * @request @body {studentId,name,adminId}
     */
    router.post('/',adminUserValidator,addAdminUser);
    /**
     * @description 관리자 동아리원 등록
     * @routes DELETE /admin/user/
     * @request @body {studentId,name,adminId}
     */
    router.delete('/',adminUserValidator,removeAdminUser);
    /**
     * @description 관리자 동아리원 검색
     * @routs POST /admin/user/search
     * @request @body {searchBar}
     */
    router.post('/search',searchAdminUser);

}
module.exports = adminUserRouter;