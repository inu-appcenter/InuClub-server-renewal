const { Club } = require('../../db/entities');
const { Image } = require('../../db/entities');
const fs = require('fs');

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
    console.log(src);
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
    
    console.log(clubId);
    const result = await Club.update(
      {...body },
      {where: {AdminId: adminId, id: clubId}},
      );

    const numberOfAffectedRows = result[0];
    if (numberOfAffectedRows === 0) {
      return false;
    }

    if (!src) {
      return false;
    }

    if(src.length === 0){
      return true;
    }
    console.log(clubId);
    console.log(src)
    const imageName = await Image.findAll({
        raw:true, // raw를 추가하면 attributes에서 원하는 속성만 깔끔하게 가져옴.
        where: {ClubId:clubId},
        attributes: ['src'],
      });
      
    const results = imageName.map(e=>e.src);
    
    for(const i of results){
      const fileStr = JSON.stringify(i);
      const fileName = fileStr.replace(/["]+/g, '');
      fs.unlink(`/Applications/PSH/INUClub/InuClub-server-renewal/${fileName}`,function(err){
        if(err) throw err;
        console.log('file deleted');
      });
    }
    // destroy images
    const imageDeleted = await Image.destroy({where:{ClubId:clubId}});
    if(!imageDeleted){
      return false;
    }
    else{
    for(const s of src){ 
      // create
      const imageCreated = await Image.create({src: s, ClubId: clubId});
      if (!imageCreated) {
        return false;
          }
        }
    return true;
     }
    }

};
module.exports = IntroService;