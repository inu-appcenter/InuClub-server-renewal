const { User } = require('../../db/entities');

const UsersClubsService = {
  getClubsInfo: async ({ studentId }) => {
    // 동아리 정보들
    // 동아리 행사들
    const user = await User.findOne({ where: { studentId } });
    if (user) {
      const myClubs = await user.getClubs();
      console.log(myClubs);
    } else throw new Error('User is not exists');
  },

  modifyAccount: () => {},
};

module.exports = UsersClubsService;
