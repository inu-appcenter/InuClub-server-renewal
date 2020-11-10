const { User } = require('../../db/entities');
const { Admin } = require('../../db/entities');
const jwt = require('../../utils/jwt.util');
const mailer = require('../../utils/nodemailer.util');
// argon 어디에 위치할지 다시 생각
const argon2 = require('argon2');

const AdminsAuthService = {
  /**
   * @returns Promise<true/false>
   */
  login: async ({ adminId, password }) => {
    try {
      const hashPasswd = await Admin.findOne({
        attributes: ['password'],
        where: { adminId: adminId },
      });
      if (!hashPasswd) return false;
      else {
        const pw = hashPasswd.password;
        const hashPassword = pw.replace(/\s/g, '+');
        if (await argon2.verify(hashPassword, password)) return true;
        else return false;
      }
    } catch (error) {
      throw error;
    }
  },
  /**
   * @returns boolean
   */
  signup: async ({ adminId, password }) => {
    const admin = await Admin.findOne({ where: { adminId } });

    if (!admin) {
      await Admin.create({ adminId, password });
      return true;
    } else return false;
  },

  /**
   * @returns Promise<true/false>
   */

  authenticate: async ({ adminId, password }) => {
    const admin = await Admin.findOne({ where: { adminId } });
    if (!admin) {
      const hashPassword = await argon2.hash(password);
      const data = await mailer.verify({ adminId, hashPassword });

      return data;
    } else return false;
  },
  /**
   * @returns Promise<true/false>
   */
  createToken: async ({ adminId }) => {
    const admin = await Admin.findOne({ where: { adminId } });
    if (admin) {
      const result = jwt.sign(adminId);
      return result;
    } else return false;
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
