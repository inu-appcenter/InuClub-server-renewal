const {Club,User,Sequelize} = require('../../db/entities');
const Op = Sequelize.Op;

const AdminUserService = {

    getAdminUsers: async ({adminId})=>{
        const club = await Club.findOne({
            where: {AdminId:adminId},
            
            include:[
                { model: User, as: 'member', attributes:{exclude:
                    ['createdAt','updatedAt']}}
            ],
            
        })
        const result = await club.getMember({raw:true});
        const clubUsersList = result.map(c => ({studentId:c.studentId,name:c.name}));
        return clubUsersList;
        //console.log(result[0].studentId);
    },
    createAdminUser: async ({studentId,name,adminId})=>{
        const user = await User.findOne({
            where : {studentId,name},
        });
        const club = await Club.findOne({
            where : {AdminId:adminId},
        });

        await user.addMyClub(club.id);
        
    },
    destroyAdminUser: async ({studentId,name,adminId})=>{
        const user = await User.findOne({
            where : {studentId,name},
        });
        const club = await Club.findOne({
            where : {AdminId:adminId},
        });

        await user.removeMyClub(club.id);

    },
    searchAdminUser: async ({searchBar,adminId})=>{
        const club = await Club.findOne({
            where : {AdminId:adminId},
        });
        
        const usersOfThatClub = await club.getMember({
            raw:true,
            where : {
                [Op.or]:[
                {name:{[Op.like]:'%'+searchBar+'%'}},    
                {studentId:{[Op.like]:'%'+searchBar+'%'}}]},
             });
        const results = usersOfThatClub.map(u=>({studentId:u.studentId,name:u.name}));
        return results;
    },
};

module.exports = AdminUserService;