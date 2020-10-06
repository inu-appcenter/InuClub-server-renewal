const { inuAuth } = require('../../utils/axios.util');

const ProfileService = {
  /**
   * @returns Promise<수정 응답이 담긴 객체>
   */
  modifyAccount: async ({
    studentId,
    password,
    newPassword,
    phone,
    major,
    name,
  }) => {
    const requestBody = {
      id: studentId,
      passwd: password,
      newPasswd: newPassword,
      tel: phone,
      major,
      name,
    };
    const { data } = await inuAuth.post('/changeInfo', requestBody);
    return data;
  },
};

module.exports = ProfileService;
