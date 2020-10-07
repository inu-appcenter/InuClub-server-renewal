const UsersAuthService = require('../../services/users/users.auth.service');

const UsersAuthController = {
  userLogin: async (req, res, next) => {
    const { studentId } = req.body;
    try {
      const data = await UsersAuthService.login(req.body);
      await UsersAuthService.signup({ studentId, token: data.token });
      res.status(201).json({ success: true, token: data.token });
    } catch (e) {
      next(e);
    }
  },
  userSignup: async (req, res, next) => {
    try {
      const data = await UsersAuthService.inuSignup(req.body);
      res.status(201).json({ success: true, token: data.answer });
    } catch (e) {
      next(e);
    }
  },
  
  userWithdrawal: async (req, res, next) => {
    try {
      // req.user -> req.headers.authorization에서 토큰 해독 후 담아둔 곳
      const result = await UsersAuthService.withdrawal({
        studentId: req.user.studentId,
      });
      if (result) res.status(200).json({ success: true });
      else res.status(204).json({ success: true, message: 'no user' });
    } catch (e) {
      next(e);
    }
  },
};
module.exports = UsersAuthController;
