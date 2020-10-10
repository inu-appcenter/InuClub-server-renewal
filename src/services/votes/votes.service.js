const { Vote, Sequelize, User, Comment } = require('../../db/entities');
const getCategory = require('../../info/category.info');
const { formatDate, startOfTime, endOfTime } = require('../../utils/moment.util');

const VotesService = {
  // 아 이거 시간 계산해야되넵.. 모먼트 이용해야지~
  // 댓글 수, 남은 일수, 투표자 수, 생성날짜 기준 날짜, 카테고리, 제목, 내용
  /**
   * 생성 시간 내림 차순으로 정렬
   * @returns Promise<투표 배열>
   */
  progressVotes: async ({progress}) => {
    const nowDate = formatDate({ ISO: Date.now(), fm: '' });
    const where = {};
    if (progress) where.endDate = { [Sequelize.Op.gte]: new Date(nowDate) };
    else where.endDate = { [Sequelize.Op.lt]: new Date(nowDate) };
    
    // findAndCountAll -> count, rows로 JSON파싱 가능..! 새롭다.....
    const rawVotes = await Vote.findAndCountAll({
      order: [['createdAt', 'DESC']],
      where,
      attributes: { exclude: ['openChatUrl', 'updatedAt']},
      include: [
        { model: User, as: 'voter', attributes: ['id', 'name'] },
        { model: Comment }
      ],
    });


    // API 만들기
    const votes = rawVotes.rows.map((vote) => {
      let endTime = Number(endOfTime({ISO: vote.endDate}).charAt(0));
      if (!endTime) endTime = 1
      return {
      id: vote.id,
      category: getCategory({num: vote.category}),
      title: vote.title,
      numOfVoters: vote.voter.length + "/" + vote.numOfPeople,
      commentsLength: vote.Comments.length,
      startTime: startOfTime({ ISO: vote.createdAt }),
      endTime: progress ? "D-" + endTime : ""
    }});
    return votes;
  },
};

module.exports = VotesService;
