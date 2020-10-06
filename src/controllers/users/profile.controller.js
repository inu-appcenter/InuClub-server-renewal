const ProfileController = {
  getProfile: (req, res, next) => {
    const { studentId, name, tel, major } = req.user;
    const user = { studentId, name, tel, major };
    res.status(200).json({ success: true, user });
  },

  modifyProfile: (req, res, next) => {
    res.send('modify profile');
  },
};

module.exports = ProfileController;
