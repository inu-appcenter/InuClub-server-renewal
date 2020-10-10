const {
  getVotes,
  getVote,
  addVote,
  modifyVote,
  removeVote,
  getClosedVotes,
} = require('../../../controllers/votes/votes.controller');
const { isUserLogin } = require('../../middlewares/auth/jwt.auth');
const { addVoteValidator, getVoteValidator } = require('../../middlewares/validators/votes.validator');
const router = require('express').Router();

function defaultRouter({ APIRouter }) {
  APIRouter.use(router);
  router.use(isUserLogin({ key: 'inu-auth' }));

  /**
   * @description 투표 리스트 조회
   * @route GET /votes/
   */
  router.get('/', getVotes);

  /**
   * @description 투표가 끝난 리스트 조회
   * @route GET /votes/closed
   */
  router.get('/close', getClosedVotes);

  /**
   * @description 투표 조회(댓글 까지)
   * @route GET /votes/:voteId
   */
  router.get('/:voteId', getVoteValidator, getVote);

  /**
   * @description 투표 생성
   * @route POST /votes/
   * @request @body {title, content, openChat, numOfPeople, startDate, endDate, category}
   */
  router.post('/', addVoteValidator, addVote);

  /**
   * @description 투표 수정
   * @route PUT /votes/:voteId
   * @request @body {title, content, openChat, numOfPeople, startDate, endDate, category}
   */
  router.put('/:voteId',getVoteValidator, addVoteValidator, modifyVote);

  /**
   * @description 투표 삭제
   * @route DELETE /votes/:voteId
   */
  router.delete('/:voteId',getVoteValidator, removeVote);
}

module.exports = defaultRouter;
