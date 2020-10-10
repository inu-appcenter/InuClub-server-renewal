const { validationResult, param, body } = require('express-validator');

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
      body('title').exists().isString().run(req),
      body('content').exists().isString().run(req),
      body('openChatUrl').exists().isString().run(req),
      body('numOfPeople').exists().isNumeric().run(req),
      body('startDate').exists().isDate().run(req),
      body('endDate').exists().isDate().run(req),
      body('category').exists().isNumeric().run(req),
    ]);
    const errors = validationResult(req);
    if (!errors.isEmpty())
      res.status(422).json({ success: false, errors: errors.array() });
    else next();
  },
};

module.exports = VotesValidator;
