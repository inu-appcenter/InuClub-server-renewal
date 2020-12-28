const IntroService =require('../../services/clubs/clubs.intro.service')

const IntroController = {
  getClub: async (req, res, next) => {
    const {clubId} = req.params;
    const {id} = req.admin;
    try{
      const clubIntro = await IntroService.getClubIntro({clubId,adminId:id});
      res.status(200).json({success:true,clubIntro});
    }catch(e){
      next(e);
    }
  },

  addClub: async (req, res, next)=> {
    const body = req.body;
    const {id} = req.admin;
    const src = req.files.map(file=>file.path);
    
    try{
      await IntroService.createClubIntro({body, adminId: id,src});
      res.status(201).json({ success: true });
    }catch(e){
      next(e);
    }

  },

  modifyClub: async (req, res, next) => {
    const body = req.body;
    const {clubId} = req.params;
    const {id} = req.admin;
    const src = req.files.map(file=>file.path);
    
    try{
      const isUpdated = await IntroService.updateClubIntro({body,adminId:id,clubId,src});
      if(isUpdated) res.status(201).json({success:true});
      else res.status(403).json({success:true, message:'작성자가 아니거나 혹은 현재 동아리 소개 페이지를 수정할 수 없습니다.'});
    } catch (e) {
      next(e);
    } 
  },

  removeClub: async (req, res, next) => {
    const {clubId} = req.params;
    const {id} = req.admin;
    try{
      const isDestroyed = await IntroService.destroyClubIntro({clubId,adminId:id});
      if(isDestroyed) res.status(200).json({success:true});
      else res.status(403).json({success:false,message:"작성자가 아니거나 혹은 현재 동아리 소개 페이지를 삭제할 수 없습니다."})
    } catch (e){
      next(e)
    }
  },

  getClubsByCategory: (req, res, next) => {
    res.send('get clubs by category');
  },

  searchClub: (req, res, next) => {
    console.log('search');
    res.send('search club');
  },
};

module.exports = IntroController;
