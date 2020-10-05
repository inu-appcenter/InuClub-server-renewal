const { validationResult, param, query, body } = require('express-validator');

const UsersValidator = {
  userLoginValidator: async (req, res, next) => {
    await Promise.all([
      body('studentId').exists().isLength({ max: 9, min: 9 }).run(req),
      body('password').exists().run(req),
    ]);
    const errors = validationResult(req);
    if (!errors.isEmpty())
      res.status(422).json({ success: false, errors: errors.array() });
    else next();
  },

  userSignupValidator: async (req, res, next) => {
    await Promise.all([
      body('studentId').exists().isLength({ max: 9, min: 9 }).run(req),
      body('password').exists().run(req),
      body('major').exists().run(req),
      body('phone').exists().run(req),
      body('name').exists().run(req),
    ]);
    const errors = validationResult(req);
    if (!errors.isEmpty())
      res.status(422).json({ success: false, errors: errors.array() });
    else next();
  },
};

module.exports = UsersValidator;
