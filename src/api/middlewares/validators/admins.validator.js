
const { validationResult,  query } = require('express-validator');

// 422 Unprocessable Entity
const AdminsValidator = {
  adminValidator: async (req, res, next) => {
    await Promise.all([
    await query('adminId').exists().withMessage("adminId가 존재하지 않아요").run(req),
    await query('password').exists().withMessage("password가 존재하지 않아요").run(req),
    ])
    
    const errors = validationResult(req);
    if (!errors.isEmpty())
      res.status(422).json({ success: false, errors: errors.array() });
    else next();
  },
  };

module.exports = AdminsValidator;
