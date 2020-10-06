const UsersClubsService = require('../../services/users/users.clubs.service');

const UsersClubsController = {
  getClubs: async (req, res, next) => {
    const { studentId } = req.user;
    try {
      const data = await UsersClubsService.getClubsInfo({ studentId });
      if (data !== null) {
        console.log(data);
        res.status(200).json({ success: true, data });
      } else
        res.status(400).json({ success: false, message: 'User is not exists' });
    } catch (e) {
      next(e);
    }
  },
};

module.exports = UsersClubsController;
