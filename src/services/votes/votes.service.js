const { Vote, Sequelize } = require('../../db/entities');
const { formatDate } = require('../../utils/moment.util');

const VotesService = {
  // 아 이거 시간 계산해야되넵.. 모먼트 이용해야지~
  // 댓글 수, 남은 일수, 투표자 수, 생성날짜 기준 날짜, 카테고리, 제목, 내용
  progressVotes: async () => {
    const nowDate = formatDate({ ISO: Date.now(), fm: '' });
    const votes = await Vote.findAll({
      where: { 
        endDate: {[Sequelize.Op.gte]: new Date(nowDate) }},
    });
    return votes;
  },
};

module.exports = VotesService;
