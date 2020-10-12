const { Comment } = require("../../db/entities");

const CommentsService = {
  /**
   * 댓글 생성하기
   * @param {{comment, userId, voteId}} 댓글, 작성자 pk, 댓글 pk 
   * @returns Promise<void>
   */
  createComment: async ({comment, userId, voteId}) => {
      await Comment.create({comment, UserId: userId, VoteId: voteId})
  },

  /**
   * 댓글 수정하기
   * @param {{comment, userId, commentId}} 댓글, 작성자 pk, 댓글 pk
   * @returns Promise<boolean>
   */
  updateComment: async ({comment, userId, commentId}) => {
      const result = await Comment.update(
        { comment }, 
        {where: {UserId: userId, id: commentId}}
      )
      if (result[0]) return true;
      return false;
  },

  /**
   * 댓글 삭제하기
   * @param {{userId, commentId}} 작성자 pk, 댓글 pk
   * @returns Promise<boolean>
   */
  destroyComment: async ({userId, commentId}) => {
      const result = await Comment.destroy(
        {where: {UserId: userId, id: commentId}}
      )
      if (result) return true;
      return false;
  },
};

module.exports = CommentsService;
