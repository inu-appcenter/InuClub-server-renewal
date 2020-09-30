const AdminService = require('../../services/administrator');

const AdminController = {
  adminLogin: async (req, res, next) => {
    const { email, password } = req.body;
    try {
      const { token } = await AdminService.login(email, password);
      res.status(201).json({ success: true, message: '로그인 성공', token });
    } catch (error) {
      next(error);
    }
  },
  adminSignup: async (req, res, next) => {
    const { email, name, password, clubId } = req.body;
    try {
      await AdminService.signup(email, name, password, clubId);
      res.status(201).json({ success: true, message: '가입 성공' });
    } catch (error) {
      next(error);
    }
  },

  createToken: async (req, res, next) => {
    try {
      const user = await User.find(req.body);
      if (user.length) {
        const token = jwt.sign(
          {
            user_id: user[0].user_id,
          },
          YOUR_SECRET_KEY,
          {
            expiresIn: '1h',
          },
        );
        res.cookie('user', token);
        res.status(201).json({
          result: 'ok',
          token,
        });
      } else {
        res.status(400).json({ error: 'invalid user' });
      }
    } catch (err) {
      console.error(err);
      next(err);
    }
  },
};

module.exports = AdminController;
