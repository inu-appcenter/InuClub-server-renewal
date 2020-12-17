const { Club } = require('../../db/entities');
const { Image } = require('../../db/entities');

const ClubIntroService = {
  getClubIntro: async ({ id }) => {
    const club = await Club.findOne({ where: { id } });
  },
  /**
   *  @return boolean
   */
  createClubIntro: async ({body,adminId,src}) => {
    await Club.create({...body, AdminId: adminId});
    if(!src){
      return true;
    }
    else if(src){
    await Image.create({src});
    return true;
    }
    else return false;
  },
};
module.exports = ClubIntroService;