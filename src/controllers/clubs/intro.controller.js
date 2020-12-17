const ClubIntroService =require('../../services/clubs/clubs.intro.service')

const IntroController = {
  getClub: (req, res, next) => {
    res.send('get club');
  },
  addClub: (req, res, next)=> {
    const body = req.body;
    const {id} = req.admin;
    const src = req.fileName;
    

    try{
      ClubIntroService.createClubIntro({body, adminId: id,src})
      res.status(201).json({ success: true });
    }catch(e){
      next(e);
    }

  },
  modifyClub: (req, res, next) => {
    res.send('modify club');
  },
  removeClub: (req, res, next) => {
    res.send('remove club');
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
