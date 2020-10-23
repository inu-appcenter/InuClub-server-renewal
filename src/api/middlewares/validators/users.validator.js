const { validationResult, body } = require('express-validator');

// 422 Unprocessable Entity
const UsersValidator = {
  userLoginValidator: async (req, res, next) => {
    await Promise.all([
      body('studentId').exists().withMessage("studentId가 존재하지 않아요").isLength({ max: 9, min: 9 }).run(req),
      body('password').exists().withMessage("password가 존재하지 않아요").run(req),
    ]);
    const errors = validationResult(req);
    if (!errors.isEmpty())
      res.status(422).json({ success: false, errors: errors.array() });
    else next();
  },

  userSignupValidator: async (req, res, next) => {
    await Promise.all([
      body('studentId').exists().withMessage("studentId가 존재하지 않아요").isLength({ max: 9, min: 9 }).run(req),
      body('password').exists().withMessage("password가 존재하지 않아요").run(req),
      body('major').exists().withMessage("major가 존재하지 않아요").run(req),
      body('phone').exists().withMessage("phone가 존재하지 않아요").run(req),
      body('name').exists().withMessage("name가 존재하지 않아요").run(req),
    ]);
    const errors = validationResult(req);
    if (!errors.isEmpty())
      res.status(422).json({ success: false, errors: errors.array() });
    else next();
  },
};

module.exports = UsersValidator;
