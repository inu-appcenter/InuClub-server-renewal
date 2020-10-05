const UsersAuthService = require('../../services/users/users.auth.service');

const UsersAuthController = {
  userLogin: async (req, res, next) => {
    const { studentId, password } = req.body;
    try {
      const data = await UsersAuthService.login({ studentId, password });
      UsersAuthService.signup({ studentId, token: data.token });
      res.status(201).json({ success: true, token: data.token });
    } catch (e) {
      next(e);
    }
  },
  userSignup: (req, res, next) => {
    res.send('user signup');
  },
  userWithdrawal: (req, res, next) => {
    res.send('user withdrawal');
  },
};
module.exports = UsersAuthController;
