const { validationResult, param, body } = require('express-validator');
const format = "YYYY-MM-DD hh:mm:ss";

// 422 Unprocessable Entity
const VotesValidator = {
  voteIdValidator: async (req,res,next) => {
      await param('voteId').exists().isNumeric().run(req);
      const errors = validationResult(req);
      if (!errors.isEmpty())
        res.status(422).json({ success: false, errors: errors.array() });
      else next();
  },

  addVoteValidator: async (req, res, next) => {
    await Promise.all([
      body('title').exists().isString().isLength({max: 100}).run(req),
      body('content').exists().isString().run(req),
      body('openChatUrl').exists().isString().run(req),
      body('numOfPeople').exists().isNumeric().run(req),
      body('startDate').exists().isISO8601().run(req),
      body('endDate').exists().isISO8601().run(req),
      body('category').exists().isNumeric().run(req),
    ]);
    const errors = validationResult(req);
    if (!errors.isEmpty())
      res.status(422).json({ success: false, errors: errors.array() });
    else next();
  },
};

module.exports = VotesValidator;
