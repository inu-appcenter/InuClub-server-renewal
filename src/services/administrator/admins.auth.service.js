const { User } = require('../../db/entities');
const { Admin } = require('../../db/entities');
const jwt = require('../../utils/jwt.util');
const mailerAuth = require('../../utils/nodemailer.auth.util');
const mailerModifyPassword = require('../../utils/nodemailer.modifyPassword.util');
// argon 어디에 위치할지 다시 생각
const argon2 = require('argon2');

const AdminsAuthService = {
  /**
   * @returns Promise<1|0>
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
   * @returns Promise<1|0>
   */

  authenticate: async ({ adminId, password }) => {
    const admin = await Admin.findOne({ where: { adminId } });
    if (!admin) {
      const hashPassword = await argon2.hash(password);
      const data = await mailerAuth.verify({ adminId, hashPassword });

      return data;
    } else return false;
  },
  /**
   * @returns Promise<1|0>
   */
  createToken: async ({ adminId }) => {
    const admin = await Admin.findOne({ where: { adminId } });
    if (admin) {
      const result = jwt.sign({ adminId });
      console.log('result:', result);
      return result;
    } else return false;
  },

  /**
   * @returns Promise<1|0>
   */
  withdrawal: async ({ adminId }) => {
    const result = await Admin.destroy({ where: { adminId } });
    return result;
  },
  /**
   * @returns Promise<1|0>
   */
  temporaryPassword: async ({ adminId }) => {
    const admin = await Admin.findOne({ where: { adminId } });
    if (admin) {
      const randomString = await Math.random().toString(36).slice(2);
      const hashPassword = await argon2.hash(randomString);
      const changedUserData = await Admin.update(
        { password: hashPassword },
        { where: { adminId } },
      );
      const data = await mailerModifyPassword.verify({ adminId, randomString });

      return data;
    } else return false;
  },
  changePassword: async ({ password, newPassword, adminId }) => {
    const adminPassword = await Admin.findOne({
      attributes: ['password'],
      where: { adminId },
    });
    if (!(await argon2.verify(adminPassword.password, password))) {
      return false;
    } else {
      const nPassword = await argon2.hash(newPassword);
      const result = await Admin.update(
        { password: nPassword },
        { where: { adminId } },
      );
      return result;
    }
  },
};

module.exports = AdminsAuthService;
