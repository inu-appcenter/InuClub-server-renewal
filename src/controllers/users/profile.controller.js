const ProfileController = {
  getProfile: (req, res, next) => {
    res.send('get profile');
  },
  modifyProfile: (req, res, next) => {
    res.send('modify profile');
  },
};

module.exports = ProfileController;
