const {
  addComment,
  modifyComment,
  removeComment,
} = require('../../../controllers/votes/comments.controller');
const { isUserLogin } = require('../../middlewares/auth/jwt.auth');
const { voteIdValidator, addCommentValidator, commentIdValidator } = require('../../middlewares/validators/votes.validator');
const router = require('express').Router();

function commentsRouter({ APIRouter }) {
  APIRouter.use('/', router);
  router.use(isUserLogin({key: 'inu-auth'}));

  /**
   * @description 댓글 생성
   * @route POST /votes/:voteId/comments
   * @request @body {comment}
   */
  router.post('/:voteId/comments', voteIdValidator, addCommentValidator, addComment);

  /**
   * @description 댓글 수정
   * @route PUT /votes/:voteId/comments/:commentId
   * @request @body {comment}
   */
  router.put('/:voteId/comments/:commentId', voteIdValidator, commentIdValidator, addCommentValidator, modifyComment);

  /**
   * @description 댓글 삭제
   * @route DELETE /votes/:voteId/comments/:commentId
   */
  router.delete('/:voteId/comments/:commentId', voteIdValidator, commentIdValidator, removeComment);
}

module.exports = commentsRouter;
