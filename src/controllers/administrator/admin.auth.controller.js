const AdminAuthService = require('../../services/administrator/admins.auth.service');

const AdminAuthController = {
  adminLogin: async (req, res, next) => {
    const { adminId, password } = req.body;
    try {
      const result = await AdminAuthService.login(req.body);

      const data = await AdminAuthService.createToken(req.body);
      if (!result) res.status(204).json({ success: true, message: 'no user' });
      else if (!data)
        res.status(204).json({ success: true, message: 'no user' });
      else {
        console.log('data:', data);
        res.status(201).json({ success: true, token: data });
      }
    } catch (e) {
      next(e);
    }
  },
  adminAuthenticate: async (req, res, next) => {
    try {
      const result = await AdminAuthService.authenticate(req.query);
      if (result) res.status(200).json({ success: true });
      else res.status(204).json({ success: true, message: 'invalid email' });
    } catch (e) {
      next(e);
    }
  },
  adminSignup: async (req, res, next) => {
    try {
      const data = await AdminAuthService.signup(req.query);
      res.status(201).json({ success: true });
    } catch (e) {
      next(e);
    }
  },
  adminWithdrawal: async (req, res, next) => {
    try {
      // req.user -> req.headers.authorization에서 토큰 해독 후 담아둔 곳
      const result = await AdminAuthService.withdrawal({
        adminId: req.admin.adminId,
      });
      if (result) res.status(200).json({ success: true });
      else res.status(204).json({ success: true, message: 'no user' });
    } catch (e) {
      next(e);
    }
  },
  adminTemporaryPassword: async (req, res, next) => {
    try {
      const result = await AdminAuthService.temporaryPassword(req.query);
      if (result) res.status(200).json({ success: true });
      else res.status(204).json({ success: true, message: 'invalid email' });
    } catch (e) {
      next(e);
    }
  },
  adminChangePassword: async (req, res, next) => {
    try {
      const adminId = req.admin.adminId;
      const { password, newPassword } = req.body;

      const result = await AdminAuthService.changePassword({
        password,
        newPassword,
        adminId,
      });

      if (result) res.status(200).json({ success: true });
      else {
        res.status(204).json({ success: false, message: 'invalid password' });
      }
    } catch (e) {
      next(e);
    }
  },
};

module.exports = AdminAuthController;
