const { User, Club, Image } = require('../../db/entities');

const UsersClubsService = {
  /**
   * 가입한 동아리 정보들
   * @returns Promise<가입한 클럽들 | null>
   */
  getClubsInfo: async ({ studentId }) => {
    const user = await User.findOne({
      where: { studentId },
      attributes: ['id'],
      include: [
        {
          model: Club,
          as: 'myClub',
          attributes: ['id', 'name', 'site'],
          include: [{ model: Image }],
        },
      ],
    });
    if (user) return user;
    else return null;
  },

  getClubsEvents: () => {},
};

module.exports = UsersClubsService;
