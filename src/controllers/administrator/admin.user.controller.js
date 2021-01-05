const AdminUserService = require('../../services/administrator/admins.user.service');

const AdminUserController = {
    addAdminUser : async (req,res,next) =>{
        const id = req.admin.id;
        const {studentId,name} = req.body;
        
        try{
            await AdminUserService.createAdminUser({studentId,name,adminId:id});
            res.status(201).json({success:true});
        }catch(e){
            next(e);
        }
    },
    removeAdminUser : async (req,res,next) => {
        const id = req.admin.id;
        const {studentId,name} = req.body;

        try{
            const isDestroyed = await AdminUserService.destroyAdminUser({studentId,name,adminId:id});
            if(isDestroyed) res.status(200).json({success:true});
            else res.status(403).json({success:false,message:"관리자가 아니거나 혹은 현재 동아리원을 삭제할 수 없습니다."})
        }catch(e){
            next(e);
        }
    },
    getAdminUser: async (req,res,next) => {
        const id = req.admin.id;
        try{
            const adminUsersList = await AdminUserService.getAdminUser({adminId:id});
            if(adminUsersList) res.status(200).json({success:true,adminUsersList});
            else res.status(403).json({success:false,message:"관리자가 아니거나 동아리원 목록을 불러올 수 없습니다."});
        }catch(e){
            next(e);
        }
    },
    searchAdminUser: async (req,res,next) =>{
        const {searchBar} = req.body;
        const id = req.admin.id;
        try{
            const result = await AdminUserService.searchAdminUser({adminId:id,searchBar});
            //검색결과가 없으면 빈배열 출력
            if(result) res.status(200).json({success:true,result});
            else res.status(403).json({success:false,message:"관리자가 아니거나 동아리원을 검색할 수가 없습니다."});
        }catch(e){
            next(e);
        }
    }

};

module.exports = AdminUserController;