const VotesController = {
  getVotes: (req, res, next) => {
    res.send('get votes');
  },
  getVote: (req, res, next) => {
    res.send('get vote');
  },
  addVote: (req, res, next) => {
    res.send('add vote');
  },
  modifyVote: (req, res, next) => {
    res.send('modify vote');
  },
  removeVote: (req, res, next) => {
    res.send('remove vote');
  },
};

module.exports = VotesController;
