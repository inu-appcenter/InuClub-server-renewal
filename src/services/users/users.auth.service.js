const { User } = require('../../db/entities');
const { inuAuth } = require('../../utils/axios.util');
const jwt = require('../../utils/jwt.util');

/**
 * inu 붙은 로직은 통합 로그인 서버와 연관된 로직
 * 없는 로직은 우리 서비스와 연관된 로직
 */
const UsersAuthService = {
  /**
   * @returns Promise
   */
  login: async ({ studentId, password }) => {
    const requestBody = { id: studentId, passwd: password };
    const { data } = await inuAuth.post('/signIn', requestBody);
    return data;
  },

  signup: async ({ studentId, token }) => {
    const user = await User.findOne({ where: { studentId } });
    if (!user) {
      const decodedUser = jwt.verify({ token, key: 'inu-auth' });
      await User.create({ studentId, name: decodedUser.name });
    }
  },

  inuSignup: async ({ studentId, password, phone, major, name }) => {
    const requestBody = {
      id: studentId,
      passwd: password,
      tel: phone,
      major,
      name,
    };
    const { answer } = await inuAuth.post('/signUp', requestBody);
    return answer;
  },

  withdrawal: async ({ studentId }) => {
    const result = await User.destroy({ where: { id: studentId } });
    console.log('서비스 탈퇴:', result);
    return result;
  },
};

module.exports = UsersAuthService;
