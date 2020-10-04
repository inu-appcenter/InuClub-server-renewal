const IntroController = {
  getClub: (req, res, next) => {
    res.send('get club');
  },
  addClub: (req, res, next) => {
    res.send('add club');
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
