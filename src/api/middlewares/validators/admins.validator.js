const { validationResult, query, body } = require('express-validator');

// 422 Unprocessable Entity
const AdminsValidator = {
  adminValidator: async (req, res, next) => {
    await Promise.all([
      query('adminId')
        .exists()
        .withMessage('adminId가 존재하지 않아요')
        .run(req),
      query('password')
        .exists()
        .withMessage('password가 존재하지 않아요')
        .run(req),
    ]);

    const errors = validationResult(req);
    if (!errors.isEmpty())
      res.status(422).json({ success: false, errors: errors.array() });
    else next();
  },
  adminLoginValidator: async (req, res, next) => {
    await Promise.all([
      body('adminId')
        .exists()
        .withMessage('adminId가 존재하지 않아요')
        .run(req),
      body('password')
        .exists()
        .withMessage('password가 존재하지 않아요')
        .run(req),
    ]);

    const errors = validationResult(req);
    if (!errors.isEmpty())
      res.status(422).json({ success: false, errors: errors.array() });
    else next();
  },
  adminIdValidator: async (req, res, next) => {
    await query('adminId')
      .exists()
      .withMessage('adminId가 존재하지 않아요')
      .run(req);

    const errors = validationResult(req);
    if (!errors.isEmpty())
      res.status(422).json({ success: false, errors: errors.array() });
    else next();
  },
};

module.exports = AdminsValidator;
