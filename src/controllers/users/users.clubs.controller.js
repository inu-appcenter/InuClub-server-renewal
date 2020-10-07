const UsersClubsService = require('../../services/users/users.clubs.service');

const UsersClubsController = {
  getClubs: async (req, res, next) => {
    const { studentId } = req.user;
    try {
      const myClubs = await UsersClubsService.getClubsInfo({ studentId });

      if (Array.isArray(myClubs) && myClubs.length !== 0) {
        const clubIds = myClubs.map((club) => club.id);
        const myEvents = await UsersClubsService.getClubsEvents({ clubIds });
        res.status(200).json({ success: true, myClubs, myEvents });
      } else if (Array.isArray(myClubs)) {
        // 추천 동아리 조회
      } else res.status(400).json({ success: false, message: 'not exists' });
    } catch (e) {
      next(e);
    }
  },
};

module.exports = UsersClubsController;
