const { User, Club, Image, Event } = require('../../db/entities');

const UsersClubsService = {
  /**
   * 가입한 동아리 정보들
   * @returns Promise<가입한 클럽들 | 빈 배열 | null>
   */
  getClubsInfo: async ({ studentId }) => {
    const user = await User.findOne({ where: { studentId } });
    if (user) {
      const myClubs = await user.getMyClub({
        attributes: ['id', 'name', 'site'],
        include: [{ model: Image, attributes: ['id', 'src'] }],
      });
      if (myClubs.length > 0) {
        const arr = JSON.parse(JSON.stringify(myClubs));
        return arr.map((club) => {
          delete club.user_club;
          return club;
        });
      } else return []; // 가입한 동아리가 없을 때
    } else return null; // 가입한 유저가 아닐 때
  },

  getClubsEvents: async ({ clubIds }) => {
    const events = await Promise.all(
      clubIds.map((clubId) => Event.findAll({ where: { ClubId: clubId } })),
    );
    return events.reduce((event, acc) => {
      console.log(...event);
      console.log(...acc);
    });
  },

  getRecommendClubs: () => {},
};

module.exports = UsersClubsService;
