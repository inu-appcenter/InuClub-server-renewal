const ProfileService = require('../../services/users/profile.service');

const ProfileController = {
  getProfile: (req, res, next) => {
    const { studentId, name, tel, major } = req.user;
    const user = { studentId, name, tel, major };
    res.status(200).json({ success: true, user });
  },

  modifyProfile: async (req, res, next) => {
    const { password, newPassword, phone, major } = req.body;
    const { studentId, name } = req.user; // 변동 없는 데이터
    try {
      const arg = { studentId, password, newPassword, phone, major, name };
      const data = await ProfileService.modifyAccount(arg);
      if (data.ans === 'success') res.status(201).json({ success: true });
      else res.status(201).json({ success: true });
    } catch (e) {
      next(e);
    }
  },
};

module.exports = ProfileController;
