const CommentsService = require("../../services/votes/comments.service");

const CommentsController = {
  addComment: async (req, res, next) => {
    const { comment } = req.body;
    const { voteId } = req.params;
    const { id } = req.user;
    try {
      await CommentsService.createComment({comment, userId: id, voteId})
      res.status(201).json({success: true});
    } catch (e) {
      next(e);
    }
  },
  modifyComment: async (req, res, next) => {
    const { comment } = req.body;
    const { commentId } = req.params;
    const { id } = req.user;
    try {
      const isUpdated = await CommentsService.updateComment(
        {comment, userId: id, commentId}
      )
      if (isUpdated) res.status(200).json({success: true})
      else res.status(403).json({success: false, message: '작성자가 아니거나 혹은 현재 댓글을 수정할 수 없습니다.'})
    } catch (e) {
      next(e);
    }
  },
  removeComment: async (req, res, next) => {
    const { commentId } = req.params;
    const { id } = req.user;
    try {
      const isDestroyed = await CommentsService.destroyComment({commentId, userId: id})
      if (isDestroyed) res.status(200).json({success: true})
      else res.status(403).json({success: false, message: '작성자가 아니거나 혹은 현재 댓글을 삭제할 수 없습니다.'})
    } catch (e) {
      next(e);
    }
  },
};

module.exports = CommentsController;
