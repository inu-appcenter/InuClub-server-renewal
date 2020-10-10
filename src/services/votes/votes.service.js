const { Vote, Sequelize, User, Comment } = require('../../db/entities');
const getCategory = require('../../info/category.info');
const { formatDate, startOfTime, endOfTime } = require('../../utils/moment.util');

const VotesService = {
  /**
   * todo: 투표 인원 꽉 찼을 때 구현하기
   * 진행 중인 투표, 마감된 투표(인원 꽉 참) 리스트 불러오기
   * @param {{progress}} {progress: boolean}: object
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
      dDay: progress ? "D-" + endTime : ""
    }});
    return votes;
  },

  /**
   * todo: D-day 구현하기
   * 투표 상세보기
   * @param {{voteId}} {voteId: number}: object 
   * @returns Promise<null | 투표 객체>
   */
  getVote: async ({voteId}) => {
    const vote = await Vote.findOne({where: {id: voteId}});
    if (!vote) return null;

    const [c, v] = await Promise.all([
      vote.getComments({
        attributes: ['comment'],
        include: [{model: User, attributes: ['id', 'studentId', 'name']}]
      }),
      vote.getVoter({attributes: ['id', 'studentId', 'name']})
    ]);
 
    const comments = c.map(comment => comment.toJSON());
    const voters = v.map(voter => voter = voter.toJSON());

    // API 만들기
    return {
      category: getCategory({num: vote.category}),
      commentsLength: comments.length,
      comments: comments.map(c => ({comment: c.comment, user: c.User})),
      content: vote.content,
      numOfVoters: voters.length,
      numOfPeople: vote.numOfPeople,
    }
  },

  /**
   * 투표 생성하기
   * @param {{body}} req.body 클라이언트에서 받은 데이터
   * @param {{userId}} User.id 유저 데이터베이스 pk
   * @returns Promise<void>
   */
  createVote: async ({body, userId}) => {
    await Vote.create({...body, UserId: userId});
  },

  /**
   * 투표 수정하기
   * @param {{body}} req.body 클라이언트에서 받은 데이터
   * @param {{voteId}} Vote.id 투표 데이터베이스 pk
   * @param {{userId}} User.id 유저 데이터베이스 pk
   * @returns Promise<boolean>
   */
  updateVote: async ({body, voteId, userId}) => {
    // update는 return 타입이 Promise<number[]>
    const result = await Vote.update({...body}, {where: {id: voteId, UserId: userId}})
    if (result[0]) return true;
    else return false;
  },

  /**
   * 투표 삭제하기
   * @param {{voteId}} Vote.id 투표 데이터베이스 pk
   * @param {{userId}} User.id 유저 데이터베이스 pk
   * @returns Promise<boolean>
   */
  destroyVote: async ({voteId, userId}) => { 
    // destroy는 return 타입이 Promise<number>
    const result = await Vote.destroy({where: {id: voteId, UserId: userId}})
    if (result) return true;
    else return false;
  }
};

module.exports = VotesService;
