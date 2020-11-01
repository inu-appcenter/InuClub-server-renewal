const { Club } = require('../../db/entities');

const ClubIntroService = {
  getClubInfo: async ({ id }) => {
    const club = await Club.findOne({ where: { id } });
  },
};
