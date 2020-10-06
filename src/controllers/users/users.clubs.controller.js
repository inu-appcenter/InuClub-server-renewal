const UsersClubsService = require('../../services/users/users.clubs.service');

const UsersClubsController = {
  getClubs: async (req, res, next) => {
    const { studentId } = req.user;
    try {
      await UsersClubsService.getClubsInfo({ studentId });
      res.end();
    } catch (e) {
      next(e);
    }
  },
};

module.exports = UsersClubsController;
