const AdminService = require('../../services/administrator');

const AdminController = {
  adminLogin: async (req, res, next) => {
    // const { email, password } = req.body;
    // try {
    //   const { token } = await AdminService.login(email, password);
    //   res.status(201).json({ success: true, message: '로그인 성공', token });
    // } catch (error) {
    //   next(error);
    // }
    res.send('admin login');
  },
  adminSignup: async (req, res, next) => {
    // const { email, name, password, clubId } = req.body;
    // try {
    //   await AdminService.signup(email, name, password, clubId);
    //   res.status(201).json({ success: true, message: '가입 성공' });
    // } catch (error) {
    //   next(error);
    // }
    res.send('admin signup');
  },

  createToken: async (req, res, next) => {
    res.send('create token');
  },
};

module.exports = AdminController;
