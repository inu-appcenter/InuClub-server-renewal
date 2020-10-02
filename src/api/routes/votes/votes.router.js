const {
  getVotes,
  getVote,
  addVote,
  modifyVote,
  removeVote,
} = require('../../../controllers/votes/votes.controller');

const router = require('express').Router();

function rootRouter() {
  /**
   * @description 투표 리스트 조회
   * @route GET /votes/
   */
  router.get('/', getVotes);

  /**
   * @description 투표 조회(댓글 까지)
   * @route GET /votes/:voteId
   */
  router.get('/:voteId', getVote);

  /**
   * @description 투표 생성
   * @route POST /votes/
   * @request @body {title, content, openChat, numOfPeople, startDate, endDate, category}
   */
  router.post('/', addVote);

  /**
   * @description 투표 수정
   * @route PUT /votes/:voteId
   * @request @body {title, content, openChat, numOfPeople, startDate, endDate, category}
   */
  router.put('/:voteId', modifyVote);

  /**
   * @description 투표 삭제
   * @route DELETE /votes/:voteId
   */
  router.delete('/:voteId', removeVote);

  return router;
}

module.exports = rootRouter;
