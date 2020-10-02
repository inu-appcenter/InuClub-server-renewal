const router = require('express').Router();

function commentsRouter() {
  /**
   * @description 댓글 생성
   * @route POST /votes/comments
   * @request @body {comment}
   */
  router.post('/', (req, res) => {});

  /**
   * @description 댓글 수정
   * @route PUT /votes/comments/:commentId
   * @request @body {comment}
   */
  router.put('/:commentId', (req, res) => {});

  /**
   * @description 댓글 삭제
   * @route DELETE /votes/comments/:commentId
   */
  router.delete('/:commentId', (req, res) => {});

  return router;
}

module.exports = commentsRouter;
