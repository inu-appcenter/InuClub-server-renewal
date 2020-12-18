const { Club } = require('../../db/entities');
const { Image } = require('../../db/entities');

const IntroService = {
  getClubIntro: async ({ id }) => {
    const club = await Club.findOne({ where: { id } });
  },
  /**
   * 동아리 소개 생성하기
   * @body {{userfile,name,category,content,phone,site,url,masterName}}
   * @returns boolean
   */
  createClubIntro: async ({body,adminId,src}) => {
    
    const club = await Club.create({...body, AdminId: adminId});
    if (!club) {
      return false;
    }

    if (!src) {
      return false;
    }

    if(src.length === 0){
      return true;
    }

    for (const s of src) {
      const imageCreated = await Image.create({src: s, ClubId: club.id});
      if (!imageCreated) {
        return false;
      }
    }

    return true;
  },
  /**
   * 동아리 소개 수정하기
   * @param {{body}} req.body 클라이언트에서 받은 데이터
   * @param {{src}} 클라이언트에서 받은 이미지 파일
   * @param {{adminId}} Admin.id 관리자 PK
   * @param {{clubId}} Club.id 동아리 PK
   * @returns boolean
   */
  updateClubIntro: async ({body,adminId,clubId,src}) =>{
    
    const result = await Club.update(
      {...body },
      {where: {AdminId: adminId, id: clubId}},
      );

    const numberOfAffectedRows = result[0];
    if (numberOfAffectedRows === 0) {
      return false;
    }

    // Club updated


    console.log(numberOfAffectedRows);

    if (!src) {
      return false;
    }

    if(src.length === 0){
      return true;
    }

    // destroy images
    for(const s of src){ // 이부분 es6 문법으로 바꾸길 원함..
      // create
      await Image.update(
        {src: s},
        {where:{ClubId: clubId}},
        );
    }
    return true;
  }

};
module.exports = IntroService;