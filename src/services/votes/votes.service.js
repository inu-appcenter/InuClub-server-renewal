const { Vote, Sequelize, User } = require('../../db/entities');
const { formatDate, relativeTime } = require('../../utils/moment.util');

const VotesService = {
  // 아 이거 시간 계산해야되넵.. 모먼트 이용해야지~
  // 댓글 수, 남은 일수, 투표자 수, 생성날짜 기준 날짜, 카테고리, 제목, 내용
  progressVotes: async () => {
    const nowDate = formatDate({ ISO: Date.now(), fm: '' });
    // findAndCountAll -> count, rows로 JSON파싱 가능..! 새롭다.....
    const rawVotes = await Vote.findAndCountAll({
      where: {
        endDate: { [Sequelize.Op.gte]: new Date(nowDate) },
      },
      include: [{ model: User, as: 'voter' }],
    });

    const votes = rawVotes.rows.map((vote) => ({
      ...vote.toJSON(),
      relativeTime: relativeTime({ ISO: vote.createdAt }),
      voter: vote.voter.map((user) => ({ id: user.id, name: user.name })),
    }));
    return votes;
  },
};

module.exports = VotesService;
