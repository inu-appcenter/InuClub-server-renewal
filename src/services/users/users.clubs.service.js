const { User, Image, Event } = require('../../db/entities');
const { formatDate } = require('../../utils/moment.util');

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

  /**
   * 가입한 동아리 행사들
   * @returns Promise<동아리 행사들>
   */
  getClubsEvents: async ({ clubIds }) => {
    const events = await Promise.all(
      clubIds.map((clubId) =>
        Event.findAll({
          where: { ClubId: clubId },
          attributes: { exclude: ['createdAt', 'updatedAt'] },
        }),
      ),
    );
    const myEvents = events.reduce((acc, event) => [...acc, ...event]);
    return myEvents
      .map((v) => v.toJSON())
      .map((event) => {
        const YMD = formatDate({ ISO: event.date, fm: 'YYYY-MM-DD' });
        event.date = formatDate({ ISO: YMD, fm: 'MMM Do' });
        event.startTime = formatDate({
          ISO: YMD + ' ' + event.startTime,
          fm: 'LT',
        });
        event.endTime = formatDate({
          ISO: YMD + ' ' + event.endTime,
          fm: 'LT',
        });
        return event;
      });
  },

  getRecommendClubs: () => {},
};

module.exports = UsersClubsService;
