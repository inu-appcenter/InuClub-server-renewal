const { User, Club } = require('../../db/entities');

const UsersClubsService = {
  /**
   * 가입한 동아리 정보들
   * @returns Promise<가입한 클럽들 | null>
   */
  getClubsInfo: async ({ studentId }) => {
    const myClubs = await User.findOne({
      where: { studentId },
      include: [
        {
          model: Club,
          as: 'Clubs',
          attributes: ['id', 'name', 'site'],
          include: [{ model: Image }],
        },
      ],
    });
    if (myClubs) return myClubs;
    else return null;
  },

  getClubsEvents: () => {},
};

module.exports = UsersClubsService;
