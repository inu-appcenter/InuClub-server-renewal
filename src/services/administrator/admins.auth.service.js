const { Admin } = require('../../db/entities');
const mailer = require('../../utils/nodemailer.util');
// argon 어디에 위치할지 다시 생각
const argon2 = require('argon2');



/**
 * inu 붙은 로직은 통합 로그인 서버와 연관된 로직
 * 없는 로직은 우리 서비스와 연관된 로직
 */
const AdminsAuthService = {
  /**
   * @returns Promise<토큰이 담긴 데이터 객체>
   */
  login: async ({ adminId, password }) => {
    const admin = await Admin.findOne({ where : {adminId:adminId},
      attributes: { exclude: ['createdAt', 'updatedAt','id','adminId'] }})
    if(!admin){return null}
    else{
      console.log(admin)
    }
   
    return data;
  },
  /**
   * @returns boolean
   */
  signup: async ({ adminId,password }) => {
    const Admin = await Admin.findOne({ where: { adminId } });
    if (!Admin) {
      
      await Admin.create({ AdminId, password });
      return true;
    }else return false;
  },

  /**
   * @returns Promise<true/null>
   */
  
  authenticate: async ({ adminId, password}) => {
    const admin = await Admin.findOne({ where : {adminId}})
    if(!admin){
        const hashPassword = await argon2.hash(password)
        const data= await mailer.verify({adminId,hashPassword})
        console.log(data)
        return data
        
    }
    else return false  
  },

  /**
   * @returns Promise<1 | 0>
   */
  withdrawal: async ({ adminId }) => {
    const result = await Admin.destroy({ where: { adminId } });
    return result;
  },
};

module.exports = AdminsAuthService;
