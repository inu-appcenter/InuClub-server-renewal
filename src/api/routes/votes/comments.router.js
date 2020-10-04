const {
  addComment,
  modifyComment,
  removeComment,
} = require('../../../controllers/votes/comments.controller');
const router = require('express').Router();

function commentsRouter({ APIRouter }) {
  APIRouter.use('/comments', router);
  /**
   * @description 댓글 생성
   * @route POST /votes/comments
   * @request @body {comment}
   */
  router.post('/', addComment);

  /**
   * @description 댓글 수정
   * @route PUT /votes/comments/:commentId
   * @request @body {comment}
   */
  router.put('/:commentId', modifyComment);

  /**
   * @description 댓글 삭제
   * @route DELETE /votes/comments/:commentId
   */
  router.delete('/:commentId', removeComment);
}

module.exports = commentsRouter;
