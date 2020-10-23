const { validationResult, param, body } = require('express-validator');
const format = "YYYY-MM-DD hh:mm:ss";

// 422 Unprocessable Entity
const VotesValidator = {
  voteIdValidator: async (req,res,next) => {
      await param('voteId')
        .exists().withMessage("voteId가 존재하지 않아요")
        .isNumeric().withMessage("숫자만 들어올 수 있어요")
        .run(req);
      const errors = validationResult(req);
      if (!errors.isEmpty())
        res.status(422).json({ success: false, errors: errors.array() });
      else next();
  },

  commentIdValidator: async (req,res,next) => {
      await param('commentId').exists().isNumeric().run(req);
      const errors = validationResult(req);
      if (!errors.isEmpty())
        res.status(422).json({ success: false, errors: errors.array() });
      else next();
  },

  addVoteValidator: async (req, res, next) => {
    await Promise.all([
      body('title').exists().withMessage("title가 존재하지 않아요").isString().isLength({max: 100}).run(req),
      body('content').exists().withMessage("content가 존재하지 않아요").isString().run(req),
      body('openChatUrl').exists().withMessage("openChatUrl가 존재하지 않아요").isString().run(req),
      body('numOfPeople').exists().withMessage("numOfPeople가 존재하지 않아요").isNumeric().run(req),
      body('startDate').exists().withMessage("startDate가 존재하지 않아요").isISO8601().run(req),
      body('endDate').exists().withMessage("endDate가 존재하지 않아요").isISO8601().run(req),
      body('category').exists().withMessage("category가 존재하지 않아요").isNumeric().run(req),
    ]);
    const errors = validationResult(req);
    if (!errors.isEmpty())
      res.status(422).json({ success: false, errors: errors.array() });
    else next();
  },

  addCommentValidator: async (req,res,next) => {
    await body('comment')
      .exists().withMessage('comment가 존재하지 않아요')
      .isString().withMessage("문자열로 해주세요")
      .run(req);
    const errors = validationResult(req);
    if (!errors.isEmpty())
      res.status(422).json({ success: false, errors: errors.array() });
    else next();
  }
};

module.exports = VotesValidator;
